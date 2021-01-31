import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { RecordStoreSceneType } from './';
import { useAppContext } from '../../../../AppContext';
import { useCitySettingContext } from '../../../../CitySettingsContext';
import { SceneType } from '../../../../enums';
import Arrow from '../../Arrow';

const RecordShopInterior: FC<{
  setScene: React.Dispatch<React.SetStateAction<RecordStoreSceneType>>;
}> = ({ setScene }) => {
  const { setCitySceneType } = useCitySettingContext();
  const { topTracks } = useAppContext();
  return (
    <>
      <Wrapper>
        <PosterRow>
          {topTracks?.items.slice(0, 8).map((item, index) => {
            const image = item.album.images?.[1]?.url;
            return (
              <SquarePoster key={`poster-${index}`}>
                <img key={index} src={image} alt="" />
              </SquarePoster>
            );
          })}
        </PosterRow>
        <Row>
          <BrowseSection onClick={() => setScene(RecordStoreSceneType.browse)}>
            <TracksWall>
              <TracksWallLabel />
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </TracksWall>
            <Bin>
              <BinLabel />
              <CdHolder>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </CdHolder>
            </Bin>
          </BrowseSection>
          <Shelf>
            <SmallShelf>
              <Books>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </Books>
              <RecordPlayer>
                <Arm />
                <Record />
                <Base>
                  <div></div>
                  <div></div>
                  <div></div>
                </Base>
              </RecordPlayer>
              <Books>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </Books>
            </SmallShelf>
            <MediumShelf>
              <Speaker>
                <SpeakerCircle />
                <SpeakerCircle />
              </Speaker>
              <BoomBox>
                <BoomBoxPanel />
                <BoomBoxBiggerPanel>
                  <div></div>
                  <div></div>
                  <div></div>
                </BoomBoxBiggerPanel>
              </BoomBox>
              <Speaker>
                <SpeakerCircle />
                <SpeakerCircle />
              </Speaker>
            </MediumShelf>
            <BottomShelf>
              <PlantWrapper>
                <Leaves />
                <Pot color="salmon" />
              </PlantWrapper>
              <PlantWrapper>
                <Leaves />
                <Pot color="royalblue" />
              </PlantWrapper>
              <PlantWrapper>
                <Leaves />
                <Pot color="salmon" />
              </PlantWrapper>
            </BottomShelf>
          </Shelf>
          <ChairWrapper>
            <ChairBack />
            <Seat></Seat>
          </ChairWrapper>
          <CounterWrapper>
            <Counter>
              <CounterTop>
                <CardReader />
                <Computer />
                <CounterMagazines>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </CounterMagazines>
              </CounterTop>
            </Counter>
          </CounterWrapper>
        </Row>
        <Floor />
        <ArrowContainer
          onClick={() => {
            setCitySceneType(SceneType.city);
          }}
        >
          <Arrow environmentColor="#1a0303" />
        </ArrowContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 550px;
  width: 100%;
  max-width: 900px;
  background: white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  animation: fade 1.5s;
  background: #5d9caa;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const PosterRow = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: 10px;
`;
const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: -40px;
`;
const Floor = styled.div`
  width: 100%;
  height: 100px;
  background: #1e1e1e;
`;
const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  width: 36%;
`;
const Counter = styled.div`
  width: 100%;
  height: 150px;
  background: #fffaee;
  z-index: 10;
`;
const CounterTop = styled.div`
  position: relative;
  left: -5px;
  background: #ffffff;
  height: 30px;
  width: 103%;
  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.32);
    position: absolute;
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 25%);
    width: 100%;
    height: 10px;
    bottom: -10px;
    left: 5px;
  }
`;
const CardReader = styled.div`
  height: 20px;
  width: 45px;
  background: black;
  position: absolute;
  left: 70px;
  bottom: 30px;
  border-radius: 3px;
  &::before {
    content: '';
    position: absolute;
    background: white;
    height: 15px;
    width: 20px;
    bottom: 14px;
    z-index: -1;
    left: 13px;
  }
`;
const Computer = styled.div`
  background: #596d78;
  width: 100px;
  height: 60px;
  position: absolute;
  right: 100px;
  bottom: 55px;
  border-radius: 3px;
  box-shadow: inset 0px 0px 0px 1px rgba(222, 222, 222, 1);
  &::before {
    content: '';
    position: absolute;
    bottom: -25px;
    right: 35px;
    border-bottom: 45px solid #ebf3f6;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    height: 0;
    width: 20px;
  }
`;
const CounterMagazines = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 30px;
  right: 30px;
  > div {
    width: 50px;
    height: 5px;
    background: #d9dc99;
    border: 1px solid black;
  }
`;

const BrowseSection = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 20%;
  height: 60%;
  margin-right: 20px;
  z-index: 10;
`;
const TracksWall = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(5, 30px);
  grid-template-rows: repeat(3, 30px);
  height: 37%;
  width: 100%;
  margin-bottom: 23px;
  grid-gap: 5px;
  > div {
    width: 100%;
    height: 100%;
    background: white;
    &:nth-child(odd) {
      transform: rotate(-7deg);
      background: #f1afce;
    }
    &:nth-child(even) {
      transform: rotate(4deg);
      background: #aff1ea;
    }
  }
`;
const TracksWallLabel = styled.span`
  position: absolute;
  // mucho hacko
  display: block;
  left: 0;
  top: -15px;
  width: 20px;
  height: 7px;
  background: salmon;
`;
const BinLabel = styled.div`
  position: absolute;
  top: -30px;
  width: 20px;
  height: 7px;
  background: salmon;
`;
const Bin = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  background: #eedeb6;
`;
const CdHolder = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  position: relative;
  background: #fff6e4;
  height: 10px;
  width: 100%;
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    background: rgba(0, 0, 0, 0.32);
    height: 3px;
    width: 100%;
  }
  > div {
    width: 30px;
    height: 30px;
    background: #ebb36d;
    z-index: -1;
    &:nth-child(odd) {
      transform: rotate(-7deg);
    }
    &:nth-child(even) {
      transform: rotate(4deg);
    }
  }
`;
const Shelf = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 17%;
  background: #fff6e4;
  z-index: 10;
  margin-right: 60px;
  padding: 20px 10px 15px;
  justify-content: space-between;
  align-items: center;
`;
const SmallShelf = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 3px;
  background: #94918b;
  width: 100%;
  height: 75px;
`;
const Books = styled.div`
  display: flex;
  > div {
    width: 5px;
    height: 50px;
    background: #b05487;
    border: 1px solid black;
  }
`;
const MediumShelf = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 3px;
  background: #94918b;
  width: 100%;
  height: 100px;
`;
const RecordPlayer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 25px;
  width: 70px;
`;
const Arm = styled.div`
  position: relative;
  margin-left: 21px;
  background: silver;
  width: 60%;
  height: 2px;
  margin-bottom: 2px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #e9ba65;
  }
  &::before {
    right: -3px;
    height: 8px;
    width: 3px;
  }
  &::after {
    left: 0;
    height: 3px;
    width: 5px;
  }
`;
const Record = styled.div`
  background: black;
  width: 85%;
  height: 4px;
`;
const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: salmon;
  width: 100%;
  height: 10px;
  > div {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: black;
    z-index: 10;
  }
`;
const Speaker = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65px;
  width: 35px;
  background: #bf657e;
  padding: 5px 0;
`;
const SpeakerCircle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: white;
  border: 2px solid black;
`;
const BoomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  width: 60px;
  background: gray;
`;
const BoomBoxPanel = styled.div`
  background: black;
  width: 30px;
  height: 10px;
`;
const BoomBoxBiggerPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: black;
  width: 50px;
  height: 20px;
  > div {
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background: white;
  }
`;
const BottomShelf = styled(SmallShelf)`
  justify-content: space-around;
`;
const PlantWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Leaves = styled.div`
  position: relative;
  bottom: -4px;
  height: 30px;
  width: 15px;
  border-radius: 100%;
  background: #67b57d;
  &::after,
  &::before {
    content: '';
    position: absolute;
    height: 20px;
    width: 10px;
    border-radius: 100%;
    bottom: 0;
  }
  &::before {
    background: #6fc688;
    transform: rotate(20deg);
    left: 11px;
  }
  &::after {
    background: #7cd392;
    transform: rotate(-20deg);
    left: -5px;
  }
`;
const Pot = styled.div<{ color: string }>`
  height: 20px;
  width: 30px;
  border-radius: 5px;
  background: ${({ color }) => color};
  z-index: 10;
`;
const SquarePoster = styled.div`
  position: relative;
  height: 140px;
  width: 100px;
  transition: transform 0.5s;
  backface-visibility: hidden;
  border: 2px solid white;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
`;
const ChairWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 200px;
  width: 100px;
  margin-right: 25px;
`;
const Seat = styled.div`
  position: relative;
  height: 15px;
  width: 90%;
  background: white;
  margin-bottom: 70px;
  border-radius: 5px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 56px;
    background: brown;
    top: 15px;
  }
  &::before {
    left: 10px;
  }
  &::after {
    right: 10px;
  }
`;
const ChairBack = styled.div`
  position: relative;
  width: 77%;
  height: 45px;
  margin-bottom: 30px;
  background: white;
  border-radius: 10px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -37px;
    width: 3px;
    height: 37px;
    background: brown;
  }
  &::before {
    left: 8px;
  }
  &::after {
    right: 8px;
  }
`;
const ArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -14px;
  left: 0;
  transform: scale(-0.3);
`;

export default RecordShopInterior;
