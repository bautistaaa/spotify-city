import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { RecordStoreSceneType } from '.';
import { useAppContext } from '../../../../AppContext';
import getRandomIntFromInterval from '../../../../utils/getRandomIntFromInterval';
import Arrow from '../../Arrow';

const TopTracksWall: FC<{
  setScene: React.Dispatch<React.SetStateAction<RecordStoreSceneType>>;
  setCurrentSelectedTrack: React.Dispatch<
    React.SetStateAction<SpotifyApi.TrackObjectFull | undefined>
  >;
}> = React.memo(({ setCurrentSelectedTrack, setScene }) => {
  const { topTracks } = useAppContext();
  if (!topTracks) return null;
  return (
    <Wall>
      <ArrowContainer
        onClick={() => {
          setScene(RecordStoreSceneType.store);
        }}
      >
        <Arrow environmentColor="#5d9caa" />
      </ArrowContainer>
      <TopTracksSign>
        <Tape />
        Top Tracks
        <Tape2 />
      </TopTracksSign>
      <Row>
        {topTracks.items.map((item, index) => {
          const degrees = getRandomIntFromInterval(-10, 10);
          const image = item.album.images?.[2]?.url;
          return (
            <SquarePoster
              onClick={() => setCurrentSelectedTrack(item)}
              degrees={degrees}
              key={`poster-${index}`}
            >
              <img key={index} src={image} alt="" />
              <PosterOverlay />
            </SquarePoster>
          );
        })}
      </Row>
    </Wall>
  );
});

const TopTracksSign = styled.div`
  position: relative;
  height: 37px;
  width: 140px;
  background: #f3f1ec;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(3deg);
`;
const Wall = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #5d9caa;
  width: 100%;
  flex: 1;
  padding: 10px 10px 30px;
`;
const Row = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
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
const SquarePoster = styled.div<{ degrees: number }>`
  position: relative;
  height: 80px;
  width: 80px;
  margin: 3px;
  transform: ${({ degrees }) => `rotate(${degrees}deg) translateZ(0)`};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: transform 0.5s;
  cursor: pointer;
  backface-visibility: hidden;
  &:hover {
    transform: translateZ(0) rotate(0deg) scale(1.3);
    z-index: 10;
    ${PosterOverlay} {
      opacity: 0;
    }
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`;
const BaseTape = styled.div`
  background-color: rgb(147 231 223 / 22%);
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
  transform: rotate(-37deg);
  bottom: 0;
  right: -10px;
`;
const ArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: -14px;
  right: 0;
  transform: scale(-0.3);
`;

export default TopTracksWall;
