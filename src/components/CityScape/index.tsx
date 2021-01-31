import React, { FC, useReducer, useRef, useState } from 'react';
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
import { reducer } from '../../reducers';
import useRect from '../../hooks/useRect2';
import { AudioFeature } from '../../AppContext';
import getTimeOfDay from '../../utils/getTimeOfDay';
import { useCitySettingContext } from '../../CitySettingsContext';

const BUILDING_COLORS: { [K in TimeOfDay]: string } = {
  [TimeOfDay.Day]: '#78a7c7',
  [TimeOfDay.Twilight]: '#ad3c50',
  [TimeOfDay.Night]: ' #646f9e',
};
const SKY_COLORS: { [K in TimeOfDay]: string } = {
  [TimeOfDay.Day]: 'linear-gradient(180deg, #ade0ff 0%, #e4f4ff 100%)',
  [TimeOfDay.Twilight]:
    'linear-gradient(rgb(135, 60, 119) 0%, rgb(236, 163, 139) 100%)',
  [TimeOfDay.Night]:
    'linear-gradient(rgb(10, 27, 78) 0%, rgb(26, 98, 161) 100%)',
};
const Cityscape: FC<{ audioFeatures: AudioFeature }> = ({ audioFeatures }) => {
  const { citySceneType, setCitySceneType } = useCitySettingContext();
  const [state] = useReducer(reducer, {
    audioFeatures,
  });

  const { valence } = state;
  const timeOfDay = getTimeOfDay(valence);
  const skyColor = SKY_COLORS[timeOfDay];
  const buildingColor = BUILDING_COLORS[timeOfDay];
  const maskRef = useRef(null);
  const scrollableRef = useRef(null);
  const [x, setX] = useState(0);
  const maskRect = useRect(maskRef, x);
  const scrollableRect = useRect(scrollableRef, x);
  const maskWidth = maskRect.width;
  const scrollableWidth = scrollableRect.width;

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

    return null;
  };

  if (citySceneType === SceneType.city) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Mask ref={maskRef}>
          {canScrollLeft && (
            <PreviousArrowContainer onClick={handlePreviousArrowClick}>
              <Arrow environmentColor="#575757" />
            </PreviousArrowContainer>
          )}
          <Wrapper ref={scrollableRef} pixelsToMove={x} background={skyColor}>
            <Moon />
            <BirdOne background={buildingColor} />
            <BirdTwo background={buildingColor} />
            <Background>
              <BuildingOne background={buildingColor} timeOfDay={timeOfDay} />
              <BuildingTwo background={buildingColor} timeOfDay={timeOfDay} />
              <BuildingThree background={buildingColor} />
              <BuildingFour background={buildingColor} />
              <BuildingFive background={buildingColor} timeOfDay={timeOfDay} />
              <BuildingSix background={buildingColor} />
              <BuildingSeven background={buildingColor} />
              <BuildingEight background={buildingColor} />
            </Background>
            <Foreground>
              <MusicHall
                onClick={() => setCitySceneType(SceneType.musicHall)}
                timeOfDay={timeOfDay}
              />
              <BenchOne />
              <Shop timeOfDay={timeOfDay} />
              <Complex timeOfDay={timeOfDay} />
              <BenchTwo />
              <RecordShop
                timeOfDay={timeOfDay}
                onClick={() => setCitySceneType(SceneType.recordShop)}
              />
              <SignBuilding
                timeOfDay={timeOfDay}
                onClick={() => setCitySceneType(SceneType.hotel)}
              />
              <DonutShop
                timeOfDay={timeOfDay}
                onClick={() => setCitySceneType(SceneType.donutShop)}
              />
              <School timeOfDay={timeOfDay} />
              <Garage timeOfDay={timeOfDay} />
              <BenchThree />
            </Foreground>
            <Ground />
          </Wrapper>
          {canScrollRight && (
            <NextArrowContainer onClick={handleNextArrowClick}>
              <Arrow environmentColor="#575757" />
            </NextArrowContainer>
          )}
        </Mask>
      </div>
    );
  }

  return <SceneWrapper>{renderScene()}</SceneWrapper>;
};

const SceneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  //background: linear-gradient(rgb(135, 60, 119) 0%, rgb(236, 163, 139) 100%);
  margin: 0 auto;
  position: relative;
  transform: ${({ pixelsToMove }) => `translateX(${pixelsToMove}px);`};
  transition: transform 0.3s ease-in;
`;
const PreviousArrowContainer = styled.div`
  position: absolute;
  bottom: -14px;
  left: 0px;
  transform: scale(-0.3);
  z-index: 100;
  cursor: pointer;
`;
const NextArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: -14px;
  right: 0px;
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
  opacity: 0.5;
`;
const Ground = styled.div`
  height: 30px;
  width: 100%;
  background: #575757;
`;
const Moon = styled.div`
  position: absolute;
  opacity: 0.8;
  top: 100px;
  left: 110px;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 30px rgba(255, 255, 255, 0.6);
`;

export default Cityscape;
