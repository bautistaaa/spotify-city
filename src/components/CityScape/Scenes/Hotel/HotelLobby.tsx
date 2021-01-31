import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { HotelSceneType } from '.';
import { useCitySettingContext } from '../../../../CitySettingsContext';
import { SceneType } from '../../../../enums';
import Arrow from '../../Arrow';

const HotelLobby: FC<{
  setSceneType: React.Dispatch<React.SetStateAction<HotelSceneType>>;
}> = ({ setSceneType }) => {
  const { setCitySceneType } = useCitySettingContext();
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);

  return (
    <Wrapper>
      <Row>
        <BigSuitCaseWrapper>
          <BigSuitCaseHandle />
          <BigSuitCaseBody />
          <BigSuitCaseWheels />
        </BigSuitCaseWrapper>
        <ElevatorDoorWrapper>
          <ElevatorLabel>
            <Marquee>
              <MarqueeText>New Releases</MarqueeText>
            </Marquee>
          </ElevatorLabel>
          <ElevatorDoor>
            <LeftDoor
              isOpen={isLeftOpen}
              onTransitionEnd={() => setSceneType(HotelSceneType.newReleases)}
            />
            <RightDoor isOpen={isLeftOpen} />
          </ElevatorDoor>
          <ElevatorButtonWrapper
            isOnRightside
            onClick={() => {
              if (isRightOpen) return;
              setIsLeftOpen(true);
            }}
          >
            <ElevatorButton />
          </ElevatorButtonWrapper>
        </ElevatorDoorWrapper>
        <ElevatorDoorWrapper>
          <ElevatorLabel>
            <Marquee>
              <RightMarqueeText>Featured Playlists</RightMarqueeText>
            </Marquee>
          </ElevatorLabel>
          <ElevatorDoor>
            <LeftDoor
              isOpen={isRightOpen}
              onTransitionEnd={() =>
                setSceneType(HotelSceneType.featuredPlaylists)
              }
            />
            <RightDoor isOpen={isRightOpen} />
          </ElevatorDoor>
          <ElevatorButtonWrapper
            onClick={() => {
              if (isLeftOpen) return;
              setIsRightOpen(true);
            }}
          >
            <ElevatorButton />
          </ElevatorButtonWrapper>
        </ElevatorDoorWrapper>
        <CounterWrapper>
          <Counter>
            <Monitor />
            <CounterTop></CounterTop>
            <CounterGlare />
            <CounterGlareSmall />
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
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 500px;
  width: 100%;
  max-width: 900px;
  background: #d29da0;
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
const BigSuitCaseWrapper = styled.div`
  position: relative;
  bottom: 48px;
  margin-right: 10px;
`;
const BigSuitCaseBody = styled.div`
  box-shadow: inset 0px 0px 0px 5px #a57114;
  background: #f7b238;
  border: 2px solid black;
  border-radius: 10px;
  height: 70px;
  width: 120px;
`;
const BigSuitCaseHandle = styled.div`
  position: absolute;
  top: -12px;
  left: 40%;
  width: 30px;
  height: 6px;
  background: #f7b238;
  border: 2px solid black;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 10px;
    background: black;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;
const BigSuitCaseWheels = styled.div`
  position: absolute;
  bottom: -9px;
  height: 10px;
  width: 100%;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: black;
  }
  &::before {
    left: 15px;
  }
  &::after {
    right: 15px;
  }
`;
const Floor = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
  background: #1a0303;
`;
const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: -40px;
`;
const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  width: 20%;
`;
const Counter = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: #6f8eae;
  z-index: 10;
`;
const CounterGlare = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  height: 100%;
  width: 50px;
  background: rgb(255 255 255 / 33%);
`;
const CounterGlareSmall = styled.div`
  position: absolute;
  top: 0;
  left: 80px;
  height: 100%;
  width: 20px;
  background: rgb(255 255 255 / 33%);
`;
const CounterTop = styled.div`
  position: relative;
  left: -5px;
  background: #b3ceea;
  height: 30px;
  width: 103%;
  z-index: 10;
  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.32);
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: -10px;
    left: 5px;
  }
`;
const ElevatorButtonWrapper = styled.div<{ isOnRightside?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 35px;
  width: 23px;
  background: #505050;
  top: 55%;
  ${({ isOnRightside }) =>
    isOnRightside
      ? `
        right: -40px;
      `
      : `
      left: -40px;
  `}
`;
const ElevatorButton = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  background: #f3dcdc;
`;
const ElevatorDoorWrapper = styled.div`
  position: relative;
  margin-right: 100px;
  margin-bottom: 40px;
`;
const ElevatorLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 5px;
  margin-bottom: 10px;
`;
const Marquee = styled.div`
  background: #1a0303;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const MarqueeText = styled.div`
  color: #fda0a0;
  animation: marquee 5s linear infinite;
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-66%);
    }
  }
`;
const RightMarqueeText = styled.div`
  color: #fda0a0;
  animation: marqueeRight 6s linear infinite;
  @keyframes marqueeRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-98%);
    }
  }
`;
const ElevatorDoor = styled.div`
  position: relative;
  display: flex;
  height: 270px;
  width: 185px;
  border: 2px solid black;
  border-bottom: none;
  background: #926060;
  overflow: hidden;
`;
const LeftDoor = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 50%;
  background: #d05a5a;
  transform: translateX(0);
  transition: transform 1s;
  border-right: 1px solid black;
  ${({ isOpen }) =>
    isOpen &&
    `
        transform: translateX(-101%);
  `}
`;
const RightDoor = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 50%;
  background: #d05a5a;
  border-left: 1px solid black;
  transition: transform 1s;
  transform: translateX(0);
  ${({ isOpen }) =>
    isOpen &&
    `
        transform: translateX(101%);
  `}
`;

const Monitor = styled.div`
  background: #4c5052;
  width: 100px;
  height: 60px;
  position: absolute;
  right: 60px;
  top: -85px;
  border-radius: 3px;
  box-shadow: inset 0px 0px 0px 3px #e6e6e6;
  &::before {
    content: '';
    position: absolute;
    bottom: -25px;
    right: 35px;
    border-bottom: 45px solid #e6e6e6;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    height: 0;
    width: 20px;
  }
`;
const ArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -14px;
  left: 0;
  transform: scale(-0.3);
`;

export default HotelLobby;
