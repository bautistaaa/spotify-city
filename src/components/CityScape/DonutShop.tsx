import { FC } from 'react';
import styled from 'styled-components';

const DonutShop: FC<{
  onClick: () => void;
}> = ({ onClick }) => {

  return (
    <Wrapper onClick={onClick}>
      <Roof>
        <DonutOuter>
          <DonutInner>
            <DonutCenter />
          </DonutInner>
        </DonutOuter>
        <DonutHolderLeft />
        <DonutHolderRight />
        <Edge />
      </Roof>
      <MainFloor>
        <Window />
        <Awning>DONUTS</Awning>
        <Door />
      </MainFloor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 30px;
  flex-shrink: 0;
`;
const Roof = styled.div`
  position: relative;
`;
const MainFloor = styled.div`
  position: relative;
  width: 150px;
  height: 80px;
  background: #f0debd;
`;
const Edge = styled.div`
  position: relative;
  left: -5px;
  background: #fff;
  width: 160px;
  height: 13px;
  border: 2px solid black;
  border-radius: 2px;
`;
const Window = styled.div`
  position: absolute;
  width: 75px;
  height: 30px;
  left: 10px;
  bottom: 20px;
  background: white;
  border: 2px solid black;
  border-bottom: none;
  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: -6px;
    width: 79px;
    height: 4px;
    background: white;
    border: 2px solid black;
    border-radius: 2px;
  }
`;
const Awning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 140px;
  height: 32px;
  left: 5px;
  top: 10px;
  background: #5a0e2d;
  border: 2px solid black;
  z-index: 10;
  color: #fcf4e7;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 3.6px;
`;
const Door = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
  height: 50px;
  width: 28px;
  border: 2px solid black;
  border-bottom: none;
  background: #cdb996;
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 4px;
    background: black;
    top: 50%;
    right: 4px;
  }
`;
const BaseDonutHolder = styled.div`
  position: absolute;
  bottom: 0;
  background: #fbf3e6;
  border: 2px solid black;
  height: 30px;
  width: 10px;
`;
const DonutHolderLeft = styled(BaseDonutHolder)`
  left: 38%;
`;
const DonutHolderRight = styled(BaseDonutHolder)`
  left: 52%;
`;
const DonutOuter = styled.div`
  position: absolute;
  bottom: 23px;
  left: 25%;
  background: #f0debd;
  height: 75px;
  width: 75px;
  border-radius: 100%;
  border: 2px solid black;
  z-index: 10;
`;
const DonutInner = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 2px solid black;
  z-index: 10;
  background: #5d0e2d;
`;
const DonutCenter = styled.div`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  border: 2px solid black;
  background: white;
  left: 10px;
  bottom: 10px;
  z-index: 10;
`;

export default DonutShop;
