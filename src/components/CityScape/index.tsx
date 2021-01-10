import React, { FC, useState } from 'react';
import {
  BuildingOne,
  BuildingTwo,
  BuildingThree,
  BuildingFour,
  BuildingFive,
  BuildingSix,
} from './Background';
import BaseBird from './Bird';
import BaseBench from './Bench';
import Shop from './Shop';
import Complex from './Complex';
import DonutShop from './DonutShop';
import Garage from './Garage';
import MiniShop from './MiniShop';
import School from './School';
import SignBuilding from './SignBuilding';
import DonutShopScene from './Scenes/DonutShop'
import { SceneType } from '../../enums';
import styled from 'styled-components/macro';

const Cityscape: FC = () => {
  const [scene, setScene] = useState(SceneType.city);
  if (scene === SceneType.city) {
    return (
      <>
        <Wrapper>
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
          </Background>
          <Foreground>
            <BenchOne />
            <Shop />
            <Complex />
            <BenchTwo />
            <MiniShop />
            <School />
            <DonutShop onClick={() => setScene(SceneType.donutShop)}/>
            <Garage />
            <SignBuilding />
            <BenchThree />
          </Foreground>
          <Ground />
        </Wrapper>
      </>
    );
  }
return <DonutShopScene />
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 100%;
  max-width: 1000px;
  background: linear-gradient(rgb(135, 60, 119) 0%, rgb(236, 163, 139) 100%);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
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
