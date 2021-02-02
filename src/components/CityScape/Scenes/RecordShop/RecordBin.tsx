import * as Vibrant from '../../../../../node_modules/node-vibrant/dist/vibrant.js';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useAppContext } from '../../../../AppContext';
import getRandomIntFromInterval from '../../../../utils/getRandomIntFromInterval';

interface Rgbs {
  dRgb: number[];
  lRgb: number[];
}
const createRgbString = (rgb: number[]) => {
  return `rgb(${rgb.join(',')})`;
};

const RecordBin: FC<{
  setCurrentSelectedTrack: React.Dispatch<
    React.SetStateAction<SpotifyApi.TrackObjectFull | undefined>
  >;
}> = React.memo(({ setCurrentSelectedTrack }) => {
  const { trackRecommendations } = useAppContext();
  const [rgbs, setRgbs] = useState<Rgbs[]>([]);

  useEffect(() => {
    if (trackRecommendations) {
      const getRgbValues = async () => {
        const promises: Promise<Rgbs>[] = trackRecommendations.tracks.map<
          Promise<Rgbs>
        >(async (track: SpotifyApi.TrackObjectFull) => {
          const image = track.album.images?.[1]?.url;
          const {
            DarkVibrant: { _rgb: dRgb },
            LightVibrant: { _rgb: lRgb },
          } = await Vibrant.from(image).getPalette();
          return {
            dRgb,
            lRgb,
          };
        });
        const rgbs = await Promise.all(promises);
        setRgbs(rgbs);
      };
      getRgbValues();
    }
  }, [trackRecommendations]);

  if (!rgbs.length) return null;

  return (
    <Shelf>
      <RecommendedSign>
        <Tape />
        Recommended
        <Tape2 />
      </RecommendedSign>
      <Container>
        {trackRecommendations?.tracks.map((track, index) => {
          const random = getRandomIntFromInterval(-5, 5);
          const image = track.album.images?.[1]?.url;
          const { lRgb } = rgbs[index];
          const rgbString = createRgbString(lRgb);
          return (
            <CompactDisc
              key={`cd-${index}`}
              top={115 - index * 30}
              zIndex={index}
              background={rgbString}
              random={random}
              onClick={() => setCurrentSelectedTrack(track)}
            >
              <PosterOverlay />
              <Cover>
                <AlbumImage src={image} />
              </Cover>
            </CompactDisc>
          );
        })}
      </Container>
    </Shelf>
  );
});

const Shelf = styled.div`
  position: relative;
  height: 170px;
  width: 100%;
  background: #fff6e4;
  padding: 10px 10px 0;
  z-index: 2;
  &::before {
    content: '';
    position: absolute;
    background: #bea679;
    left: 10px;
    top: 10px;
    right: 10px;
    bottom: 0;
    border-radius: 4px;
  }
`;
const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 40px);
  column-gap: 10px;
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 2px;
  top: -35px;
`;
const PosterOverlay = styled.div`
  position: absolute;
  background: black;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.2;
  transition: opacity 0.3s;
  z-index: 10;
`;
const CompactDisc = styled.div<{
  top: number;
  background: string;
  zIndex: number;
  random: number;
}>`
  transform: ${({ random }) => `rotate(${random}deg) translateZ(0)`};
  left: ${({ random }) => `${random}px`};
  display: block;
  position: relative;
  width: 170px;
  height: 140px;
  padding-left: 25px;
  background-color: white;
  box-shadow: 0px 0px 10px 6px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: ${({ zIndex }) => zIndex};
  transition: transform 0.5s;
  cursor: pointer;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 25px;
    height: 100%;
    background: ${({ background }) => background};
    z-index: 9;
  }
  &:hover {
    transform: translateZ(10px) rotate(0deg) translateY(-10px);
    ${PosterOverlay} {
      opacity: 0;
    }
  }
`;
const AlbumImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
const Cover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const RecommendedSign = styled.div`
  position: absolute;
  top: -60px;
  left: 30px;
  height: 37px;
  width: 140px;
  background: #f3f1ec;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-2deg);
`;
const BaseTape = styled.div`
  background-color: rgb(231 147 147 / 22%);
  height: 14px;
  position: absolute;
  width: 39px;
`;
const Tape = styled(BaseTape)`
  transform: rotate(-37deg);
  top: 0;
  left: -10px;
`;
const Tape2 = styled(BaseTape)`
  transform: rotate(43deg);
  top: 0;
  right: -20px;
`;

export default RecordBin;
