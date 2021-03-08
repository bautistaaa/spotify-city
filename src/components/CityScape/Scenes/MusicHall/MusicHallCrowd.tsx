import React, { FC } from 'react';

import { MusicHallSceneType } from '.';
import makeItPhony, { PhoneDistance } from '../../../../utils/makeItPhony';
import makeItHeady from '../../../../utils/makeItHeady';

import styled from 'styled-components/macro';
import { ColorInfo, KEY_HUES } from '../../../../constants/colors';
import Arrow from '../../Arrow';

const renderClosestPhones = (colorInfo: ColorInfo, duration: number) => {
  return makeItPhony(7, PhoneDistance.Closest, colorInfo, duration);
};
const renderClosestHeads = (colorInfo: ColorInfo) => {
  return makeItHeady(25, PhoneDistance.Closest, colorInfo);
};

const MusicHallCrowd: FC<{
  setScene: React.Dispatch<React.SetStateAction<MusicHallSceneType>>;
  trackFeatures: SpotifyApi.AudioFeaturesResponse | undefined;
}> = ({ setScene, trackFeatures }) => {
  if (trackFeatures) {
    const colorInfo = KEY_HUES[trackFeatures.key];
    const calc = trackFeatures.tempo / 60;
    const tempo = calc > 5 ? 5 : calc;
    const animationDuration = Math.floor(5 - tempo);

    return (
      <>
        <Wrapper>
          <Disclaimer>
            If no music starts to play, refresh and come back! (Sorry..)
          </Disclaimer>
          <StageWrapper>
            <Row>
              <Speaker>
                <LargeWoofer animationDuration={animationDuration} />
                <MediumWoofer />
                <LargeWoofer animationDuration={animationDuration} />
              </Speaker>
              <DJAreaWrapper>
                <EquipmentRow>
                  <RecordPlayer>
                    <Arm />
                    <Record />
                    <Base>
                      <div></div>
                      <div></div>
                      <div></div>
                    </Base>
                  </RecordPlayer>
                  <RecordController />
                  <RecordPlayer>
                    <Arm />
                    <Record />
                    <Base>
                      <div></div>
                      <div></div>
                      <div></div>
                    </Base>
                  </RecordPlayer>
                </EquipmentRow>
                <DJBooth>
                  <DJBoothLcd animationDuration={animationDuration} />
                </DJBooth>
              </DJAreaWrapper>
              <Speaker>
                <LargeWoofer animationDuration={animationDuration} />
                <MediumWoofer />
                <LargeWoofer animationDuration={animationDuration} />
              </Speaker>
              <LightBeamTwo animationDuration={animationDuration} />
              <LightBeamThree animationDuration={animationDuration} />
              <LightBeam animationDuration={animationDuration} />
            </Row>
            <StageFloor />
            <Stage></Stage>
          </StageWrapper>
          <AudienceWrapper>
            <PhoneWrapper animationDuration={animationDuration}>
              {renderClosestPhones(colorInfo, animationDuration)}
            </PhoneWrapper>
            {renderClosestHeads(colorInfo)}
          </AudienceWrapper>
          <ArrowContainer
            onClick={() => {
              console.log('wtf');
              setScene(MusicHallSceneType.lobby);
            }}
          >
            <Arrow environmentColor="#28242b" />
          </ArrowContainer>
        </Wrapper>
      </>
    );
  }

  return null;
};
const PhoneWrapper = styled.div<{ animationDuration: number }>`
  div:nth-child(odd) {
    animation-delay: ${({ animationDuration }) => `${animationDuration / 2}s`};
  }
`;
const Row = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 86%;
  height: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 700px;
  width: 100%;
  max-width: 900px;
  background: #253d6a;
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
const StageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 70%;
  width: 100%;
`;
const StageFloor = styled.div`
  position: relative;
  background: #447db5;
  width: 95%;
  height: 30px;
`;
const Stage = styled.div`
  background: #2c4c80;
  width: 80%;
  height: 85px;
`;
const AudienceWrapper = styled.div`
  height: 150px;
  width: 100%;
`;
const MediumWoofer = styled.div`
  position: relative;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: #326699;
  &::before {
    content: '';
    position: absolute;
    bottom: 25%;
    left: 25%;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    background: #2c4c80;
  }
`;
const LargeWoofer = styled.div<{ animationDuration: number }>`
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #326699;
  animation: ${({ animationDuration }) =>
    `beat ${animationDuration}s infinite`};
  transform-origin: center;
  &::before {
    content: '';
    position: absolute;
    bottom: 25%;
    left: 25%;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background: #2c4c80;
  }
  @keyframes beat {
    from,
    to {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;
const Speaker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 140px;
  background: #2c4c80;
  padding: 10px;
`;
const DJAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
`;
const DJBooth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 200px;
  width: 300px;
  background: #abaacb;
`;
const DJBoothLcd = styled.div<{ animationDuration: number }>`
  height: 125px;
  width: 200px;
  background: linear-gradient(130deg, #29efbc, #dc84f2, #ffc872, #ffc872);
  background-size: 800% 800%;
  animation: ${({ animationDuration }) => `lcd ${animationDuration}s infinite`};
  @keyframes lcd {
    from,
    to {
      background-position: 51% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
  }
`;
const EquipmentRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-end;
`;
const RecordController = styled.div`
  height: 20px;
  width: 70px;
  background: #5397cf;
`;
const RecordPlayer = styled.div`
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
  background: #5397cf;
  width: 100%;
  height: 10px;
  > div {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: white;
    z-index: 10;
  }
`;
const LightBeam = styled.div<{ animationDuration: number }>`
  position: absolute;
  bottom: 0;
  right: 170px;
  clip-path: polygon(0 0, 100% 0, 68% 100%, 30% 100%);
  background: linear-gradient(
    180deg,
    rgb(199 163 90 / 80%) 0%,
    rgb(208 208 205 / 20%) 100%
  );
  height: 120%;
  width: 170px;
  transform: rotateZ(5deg);
  transform-origin: bottom;
  animation: ${({ animationDuration }) =>
    `rotate ${animationDuration}s infinite`};
  @keyframes rotate {
    from,
    to {
      transform: rotateZ(5deg);
    }
    25%,
    70% {
      background: linear-gradient(
        180deg,
        rgb(165 90 181 / 80%) 0%,
        rgb(208 208 205 / 20%) 100%
      );
    }
    50% {
      transform: rotateZ(-10deg);
    }
  }
`;

const LightBeamTwo = styled.div<{ animationDuration: number }>`
  position: absolute;
  bottom: 0;
  left: 170px;
  clip-path: polygon(0 0, 100% 0, 68% 100%, 30% 100%);
  background: linear-gradient(
    180deg,
    rgb(199 163 90 / 80%) 0%,
    rgb(208 208 205 / 20%) 100%
  );
  height: 120%;
  width: 170px;
  transform: rotateZ(5deg);
  transform-origin: bottom;
  animation: ${({ animationDuration }) =>
    `rotateTwo ${animationDuration}s infinite`};
  @keyframes rotateTwo {
    from,
    to {
      transform: rotateZ(5deg);
    }
    15%,
    90% {
      background: linear-gradient(
        180deg,
        rgb(108 209 161 / 80%) 0%,
        rgb(208 208 205 / 20%) 100%
      );
    }
    45% {
      background: linear-gradient(
        180deg,
        rgb(199 163 90 / 80%) 0%,
        rgb(208 208 205 / 20%) 100%
      );
    }
    50% {
      transform: rotateZ(-10deg);
    }
  }
`;
const LightBeamThree = styled.div<{ animationDuration: number }>`
  position: absolute;
  bottom: 0;
  left: 300px;
  clip-path: polygon(0 0, 100% 0, 68% 100%, 30% 100%);
  background: linear-gradient(
    180deg,
    rgb(199 163 90 / 80%) 0%,
    rgb(208 208 205 / 20%) 100%
  );
  height: 120%;
  width: 170px;
  transform: rotateZ(-5deg);
  transform-origin: bottom;
  animation: ${({ animationDuration }) =>
    `rotateThree ${animationDuration}s infinite`};
  @keyframes rotateThree {
    from,
    to {
      transform: rotateZ(-5deg);
    }
    50% {
      transform: rotateZ(10deg);
    }
  }
`;
const ArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -14px;
  left: 0;
  transform: scale(-0.3);
  z-index: 1000;
`;
const Disclaimer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  padding: 20px;
`;
export default MusicHallCrowd;
