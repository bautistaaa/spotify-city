import React, { FC, FormEvent, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Arrow from './Arrow';
import {
  BuildingOne,
  BuildingTwo,
  BuildingThree,
  BuildingFour,
  BuildingFive,
  BuildingSix,
  BuildingSeven,
  BuildingEight,
} from './Background';
import WelcomeModal from '../WelcomeModal';
import BaseBird from './Bird';
import BaseBench from './Bench';
import Shop from './Shop';
import Complex from './Complex';
import DonutShop from './DonutShop';
import Garage from './Garage';
import RecordShop from './RecordShop';
import MusicHall from './MusicHall';
import School from './School';
import SignBuilding from './SignBuilding';
import DonutShopInterior from './Scenes/DonutShop';
import Hotel from './Scenes/Hotel';
import RecordShopInterior from './Scenes/RecordShop/index';
import MusicHallScene from './Scenes/MusicHall';
import { SceneType, TimeOfDay } from '../../enums';
import useRect from '../../hooks/useRect3';
import { AudioFeature } from '../../AppContext';
import getTimeOfDay from '../../utils/getTimeOfDay';
import NavigationButton from '../NavigationButton';
import RadioButton from '../RadioButton';
import getRandomIntFromInterval from '../../utils/getRandomIntFromInterval';
import { useCitySettingContext } from '../../CitySettingsContext';

const GROUND_COLORS: { [K in TimeOfDay]: string } = {
  [TimeOfDay.Day]: '#c8c6c6',
  [TimeOfDay.Twilight]: '#575757',
  [TimeOfDay.Night]: '#2c2c2c',
};
const BUILDING_COLORS: { [K in TimeOfDay]: string } = {
  [TimeOfDay.Day]: '#a0c8e3',
  [TimeOfDay.Twilight]: '#b45669',
  [TimeOfDay.Night]: '#3b5589',
};
const SKY_COLORS: { [K in TimeOfDay]: string } = {
  [TimeOfDay.Day]: 'linear-gradient(180deg, #ade0ff 0%, #e4f4ff 100%)',
  [TimeOfDay.Twilight]:
    'linear-gradient(rgb(135, 60, 119) 0%, rgb(236, 163, 139) 100%)',
  [TimeOfDay.Night]:
    'linear-gradient(rgb(10, 27, 78) 0%, rgb(26, 98, 161) 100%)',
};
const planetOverrides = {
  left: `${getRandomIntFromInterval(0, 700)}px`,
  top: `${getRandomIntFromInterval(10, 100)}px`,
};
const Cityscape: FC<{ audioFeatures: AudioFeature }> = ({ audioFeatures }) => {
  const { citySceneType, setCitySceneType } = useCitySettingContext();
  const [valence, setValence] = useState(audioFeatures.valence);

  const sunMoonRef = useRef<HTMLElement>(null);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);
  const timeOfDay = getTimeOfDay(valence);
  const skyColor = SKY_COLORS[timeOfDay];
  const buildingColor = BUILDING_COLORS[timeOfDay];
  const maskRef = useRef(null);
  const scrollableRef = useRef(null);
  const [x, setX] = useState(0);
  const maskRect = useRect(maskRef, [x]);
  const scrollableRect = useRect(scrollableRef, x);
  const maskWidth = maskRect.width;
  const scrollableWidth = scrollableRect.width;
  const sunMoonRect = useRect(sunMoonRef, x);
  const groundColor = GROUND_COLORS[timeOfDay];

  const canScrollLeft = x < 0;
  const canScrollRight = maskWidth - x < scrollableWidth;

  const handleNextArrowClick = () => {
    const scroll = maskWidth + Math.abs(x) - scrollableWidth;
    const move =
      Math.abs(scroll) > maskWidth ? x - maskWidth : x - Math.abs(scroll);
    setX(move);
  };
  const handlePreviousArrowClick = () => {
    const scroll = x + maskWidth;
    const move = Math.abs(scroll) > x + maskWidth ? scroll : 0;
    setX(move);
  };
  const renderScene = () => {
    if (citySceneType === SceneType.musicHall) {
      return (
        <>
          <MusicHallScene />
        </>
      );
    }
    if (citySceneType === SceneType.donutShop) {
      return (
        <>
          <DonutShopInterior />
        </>
      );
    }
    if (citySceneType === SceneType.recordShop) {
      return (
        <>
          <RecordShopInterior />
        </>
      );
    }
    if (citySceneType === SceneType.hotel) {
      return (
        <>
          <Hotel />
        </>
      );
    }

    if (citySceneType === SceneType.city) {
      return (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1000px',
          }}
        >
          <Mask ref={maskRef}>
            <Wrapper ref={scrollableRef} pixelsToMove={x} background={skyColor}>
              <Moon ref={sunMoonRef as any} style={planetOverrides} />
              <BirdOne background={buildingColor} />
              <BirdTwo background={buildingColor} />
              <Background>
                <BuildingOne background={buildingColor} timeOfDay={timeOfDay} />
                <BuildingTwo background={buildingColor} timeOfDay={timeOfDay} />
                <BuildingThree background={buildingColor} />
                <BuildingFour background={buildingColor} />
                <BuildingFive
                  background={buildingColor}
                  timeOfDay={timeOfDay}
                />
                <BuildingSix background={buildingColor} />
                <BuildingSeven background={buildingColor} />
                <BuildingEight background={buildingColor} />
              </Background>
              <Foreground>
                <MusicHall
                  wrapperRect={scrollableRect}
                  sunMoonRect={sunMoonRect}
                  x={x}
                  onClick={() => setCitySceneType(SceneType.musicHall)}
                  timeOfDay={timeOfDay}
                />
                <BenchOne />
                <Shop
                  wrapperRect={scrollableRect}
                  sunMoonRect={sunMoonRect}
                  x={x}
                  timeOfDay={timeOfDay}
                />
                <Complex
                  wrapperRect={scrollableRect}
                  sunMoonRect={sunMoonRect}
                  x={x}
                  timeOfDay={timeOfDay}
                />
                <BenchTwo />
                <RecordShop
                  wrapperRect={scrollableRect}
                  sunMoonRect={sunMoonRect}
                  x={x}
                  timeOfDay={timeOfDay}
                  onClick={() => setCitySceneType(SceneType.recordShop)}
                />
                <SignBuilding
                  wrapperRect={scrollableRect}
                  sunMoonRect={sunMoonRect}
                  x={x}
                  timeOfDay={timeOfDay}
                  onClick={() => setCitySceneType(SceneType.hotel)}
                />
                <DonutShop
                  wrapperRect={scrollableRect}
                  sunMoonRect={sunMoonRect}
                  x={x}
                  timeOfDay={timeOfDay}
                  onClick={() => setCitySceneType(SceneType.donutShop)}
                />
                <School
                  wrapperRect={scrollableRect}
                  sunMoonRect={sunMoonRect}
                  x={x}
                  timeOfDay={timeOfDay}
                />
                <Garage
                  wrapperRect={scrollableRect}
                  sunMoonRect={sunMoonRect}
                  x={x}
                  timeOfDay={timeOfDay}
                />
                <BenchThree />
              </Foreground>
              <Ground color={groundColor} />
            </Wrapper>
          </Mask>
          {canScrollLeft && (
            <PreviousArrowContainer onClick={handlePreviousArrowClick}>
              <Arrow environmentColor="#fff" />
            </PreviousArrowContainer>
          )}
          {canScrollRight && (
            <NextArrowContainer onClick={handleNextArrowClick}>
              <Arrow environmentColor="#fff" />
            </NextArrowContainer>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <SceneWrapper>
      {renderScene()}
      <ActionBar>
        {!isWelcomeModalOpen && citySceneType === SceneType.city && (
          <NavigationButton
            text="settings"
            onClick={() => {
              setIsSettingsMenuOpen(true);
            }}
          />
        )}
      </ActionBar>
      {isWelcomeModalOpen && (
        <WelcomeModal setIsWelcomeModalOpen={setIsWelcomeModalOpen} />
      )}
      {isSettingsMenuOpen && (
        <>
          <SettingsMenu>
            <p>
              In this realm you have the power to change the{' '}
              <strong>time</strong> of day at will
            </p>

            <div
              onChange={(e: FormEvent) => {
                setValence(e.target.value);
              }}
              style={{ marginBottom: '20px', textAlign: 'left' }}
            >
              <RadioButton
                id="night"
                name="timeOfDay"
                value="0"
                isChecked={valence < 0.4}
              />
              <RadioButton
                id="twilight"
                name="timeOfDay"
                value="0.4"
                isChecked={valence < 0.8 && valence >= 0.4}
              />
              <RadioButton
                id="day"
                name="timeOfDay"
                value="1"
                isChecked={valence >= 1}
              />
            </div>
            <NavigationButton
              text="Done"
              onClick={() => {
                setIsSettingsMenuOpen(false);
              }}
            />
          </SettingsMenu>
          <Overlay />
        </>
      )}
    </SceneWrapper>
  );
};

const SceneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
`;
const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
`;
const Mask = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
  animation: fade 1.3s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Wrapper = styled.div<{ pixelsToMove: number; background: string }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1500px;
  background: ${({ background }) => background};
  margin: 0 auto;
  position: relative;
  transform: ${({ pixelsToMove }) => `translateX(${pixelsToMove}px);`};
  transition: transform 0.3s ease-in;
`;
const PreviousArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -43px;
  left: 0;
  transform: scale(-0.3);
  z-index: 100;
`;
const NextArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -40px;
  right: 0;
  transform: scale(0.3);
`;
const Foreground = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 100%;
  width: 100%;
`;
const BenchOne = styled(BaseBench)`
  left: 105px;
`;
const BenchTwo = styled(BaseBench)`
  left: 565px;
`;
const BenchThree = styled(BaseBench)`
  right: 10px;
`;
const BirdOne = styled(BaseBird)`
  position: absolute;
  top: 30px;
  right: 0;
  transform: translateX(20px);
  animation: fly 19s infinite ease;

  @keyframes fly {
    0% {
      transform: translateX(20px);
    }
    42%,
    100% {
      transform: translateX(-1520px) translateY(200px);
    }
  }
`;
const BirdTwo = styled(BaseBird)`
  position: absolute;
  bottom: 300px;
  left: 0;
  transform: translateX(-20px) scaleX(-1);
  z-index: 10;
  animation: flyBirdTwo 15s infinite linear 4s;

  @keyframes flyBirdTwo {
    0% {
      transform: translateX(-20px);
    }
    45%,
    100% {
      opacity: 0;
      transform: translateX(1520px) translateY(-200px);
    }
  }
`;
const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 28px;
`;
const Ground = styled.div<{ color: string }>`
  height: 30px;
  width: 100%;
  background: ${({ color }) => color};
`;
const Moon = styled.div`
  position: absolute;
  opacity: 0.8;
  top: 100px;
  left: 310px;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 30px rgba(255, 255, 255, 0.6);
`;
const SettingsMenu = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 35%;
  width: 400px;
  background: #ffffff;
  padding: 20px;
  z-index: 201;
  font-weight: 400;
  p {
    margin-bottom: 20px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  background: black;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
  transition: opacity 0.3s;
  z-index: 200;
`;

export default Cityscape;
