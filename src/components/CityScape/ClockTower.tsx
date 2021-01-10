import styled from 'styled-components/macro';
import Clock from './Clock';

const ClockTower = () => {
  return (
    <Base>
      <Roof />
      <RoofShadow />
      <Clock />
      <Rail />
      <Door />
    </Base>
  );
};

const Base = styled.div`
  width: 70px;
  height: 200px;
  position: absolute;
  bottom: 30px;
  left: 915px;
  background: rgb(197, 105, 105);
`;
const Rail = styled.div`
  width: 85px;
  height: 7px;
  position: absolute;
  background: #aa2929;
  left: -8px;
  top: 60px;
  z-index: 4;
`;
const Roof = styled.div`
  position: absolute;
  height: 7px;
  width: 85px;
  background: #aa2929;
  left: -8px;
  top: -3px;
  z-index: 4;
  &::after {
    content: '';
    position: absolute;
    top: -25px;
    left: 2px;
    width: 0;
    height: 0;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-bottom: 25px solid #8b2222;
  }
`;
const RoofShadow = styled.div`
  position: absolute;
  width: 70px;
  height: 10px;
  background: rgb(107 107 107 / 45%);
  left: 0;
  top: -1px;
  z-index: 3;
`;
const Door = styled.div`
  position: absolute;
  width: 29px;
  height: 43px;
  bottom: 0;
  left: 21px;
  background: rgb(184, 72, 72);
  &::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 40px;
    bottom: 0;
    left: 3px;
    background: rgb(146, 59, 59);
  }
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    bottom: 18px;
    right: 6px;
    background: gold;
  }
`;

export default ClockTower;
