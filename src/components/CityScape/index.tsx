import React, { FC, TransitionEvent, useRef, useState } from 'react';
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
import MiniShop from './MiniShop';
import MusicHall from './MusicHall';
import School from './School';
import SignBuilding from './SignBuilding';
import DonutShopScene from './Scenes/DonutShop';
import MusicHallScene from './Scenes/MusicHallScene';
import { SceneType } from '../../enums';
import useRect from '../../hooks/useRect2';

const Cityscape: FC = () => {
  const maskRef = useRef(null);
  const scrollableRef = useRef(null);
  const [x, setX] = useState(0);
  const [scene, setScene] = useState(SceneType.city);
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

  if (scene === SceneType.city) {
    return (
      <>
        <Mask ref={maskRef}>
          {canScrollLeft && (
            <PreviousArrowContainer onClick={handlePreviousArrowClick}>
              <Arrow environmentColor="#575757" />
            </PreviousArrowContainer>
          )}
          <Wrapper ref={scrollableRef} pixelsToMove={x}>
            <Moon />
            <BirdOne />
            <BirdTwo />
            <Background>
              <BuildingOne />
              <BuildingTwo />
              <BuildingThree />
              <BuildingFour />
              <BuildingFive />
              <BuildingSix />
              <BuildingSeven />
              <BuildingEight />
            </Background>
            <Foreground>
              <MusicHall onClick={() => setScene(SceneType.musicHall)} />
              <BenchOne />
              <Shop />
              <Complex />
              <BenchTwo />
              <MiniShop />
              <SignBuilding />
              <DonutShop onClick={() => setScene(SceneType.donutShop)} />
              <School />
              <Garage />
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
      </>
    );
  }

  if (scene === SceneType.musicHall) {
    return (
      <>
        <button onClick={() => setScene(SceneType.city)}>Home</button>
        <MusicHallScene />
      </>
    );
  }
  if (scene === SceneType.donutShop) {
    return (
      <>
        <button onClick={() => setScene(SceneType.city)}>Home</button>
        <DonutShopScene />
      </>
    );
  }
  return null;
};

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
const Wrapper = styled.div<{ pixelsToMove: number }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1500px;
  background: linear-gradient(rgb(135, 60, 119) 0%, rgb(236, 163, 139) 100%);
  margin: 0 auto;
  position: relative;
  transform: ${({ pixelsToMove }) => `translateX(${pixelsToMove}px);`};
  transition: transform .3s ease-in;
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
  left: 265px;
`;
const BenchThree = styled(BaseBench)`
  right: 10px;
`;
const BirdOne = styled(BaseBird)`
  position: absolute;
  top: 30px;
  right: 0;
  transform: translateX(20px);
  animation: fly 15s infinite ease;

  @keyframes fly {
    0% {
      transform: translateX(20px);
    }
    42%,
    100% {
      transform: translateX(-1100px) translateY(200px);
    }
  }
`;
const BirdTwo = styled(BaseBird)`
  position: absolute;
  bottom: 300px;
  left: 0;
  transform: translateX(-20px) scaleX(-1);
  z-index: 10;
  animation: flyBirdTwo 13s infinite linear 4s;

  @keyframes flyBirdTwo {
    0% {
      transform: translateX(-20px);
    }
    45%,
    100% {
      transform: translateX(1100px) translateY(-200px);
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
  opacity: 0.6;
  top: 100px;
  left: 110px;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 30px rgba(255, 255, 255, 0.6);
`;

export default Cityscape;
