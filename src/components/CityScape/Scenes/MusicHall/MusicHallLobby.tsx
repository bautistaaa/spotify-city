import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { useAppContext } from '../../../../AppContext';
import { MusicHallSceneType, TrackData } from '.';
import { SceneType } from '../../../../enums';
import { useCitySettingContext } from '../../../../CitySettingsContext';
import Arrow from '../../Arrow';

const MusicHallLobby: FC<{
  setScene: React.Dispatch<React.SetStateAction<MusicHallSceneType>>;
  setTrackData: React.Dispatch<React.SetStateAction<TrackData>>;
}> = ({ setScene, setTrackData }) => {
  const { setCitySceneType } = useCitySettingContext();
  const { topTracks } = useAppContext();
  return (
    <Wrapper>
      <Marquee>
        <div>YOUR TOP TRACKS(6mo)</div>
      </Marquee>
      <TopTracks>
        {topTracks?.items.slice(0, 20).map((item, index) => {
          return (
            <Track
              onClick={() => {
                setScene(MusicHallSceneType.crowd);
                setTrackData({
                  uri: item.uri,
                  id: item.id,
                });
              }}
              key={index}
            >
              <img
                width="32"
                height="32"
                src={item.album.images?.[2]?.url}
                alt=""
              />
              <TrackInfo>
                <Artist>{item.artists?.[0].name}</Artist>
                <Title>{item.name}</Title>
              </TrackInfo>
            </Track>
          );
        })}
      </TopTracks>
      <Marquee>
        <div>SELECT A SONG TO ENTER</div>
      </Marquee>
      <ArrowContainer
        onClick={() => {
          setCitySceneType(SceneType.city);
        }}
      >
        <Arrow environmentColor="#28242b" />
      </ArrowContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 700px;
  width: 100%;
  max-width: 900px;
  background: #28242b;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  animation: fade 1.5s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const TopTracks = styled.div`
  width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Track = styled.button`
  border: none;
  margin: none;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: white;
  cursor: pointer;
`;
const TrackInfo = styled.div`
  margin-left: 20px;
  text-align: left;
`;
const Artist = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const Title = styled.div``;
const Marquee = styled.div`
  margin: 30px 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 7.7px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  height: 30px;
  color: #fff;
  animation: neon 1.5s ease-in-out infinite alternate;
  @keyframes neon {
    from {
      text-shadow: 0 0 10px #ddd, 0 0 20px #ddd, 0 0 30px #fff, 0 0 40px #ff1177,
        0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #ddd, 0 0 15px #ddd, 0 0 20px #ff1177,
        0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
    }
  }
`;
const ArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -14px;
  left: 0;
  transform: scale(-0.3);
`;

export default MusicHallLobby;
