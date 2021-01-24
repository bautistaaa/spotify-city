import styled from 'styled-components/macro';

const School = () => {
  return (
    <Base>
      <Roof />
      <RoofShadow />
      <ThirdFloor>
        <TailWindow />
        <TailWindow />
        <TailWindow />
        <ThirdFloorRailing />
        <ThirdFloorRailingShadow />
      </ThirdFloor>
      <SecondFloor>
        <Window />
        <Window />
        <Window />
        <SecondFloorRailing />
        <SecondFloorRailingShadow />
      </SecondFloor>
      <FirstFloor>
        <UpperLevel>
          <Window />
          <Window />
          <Window />
        </UpperLevel>
        <LowerLevel>
          <Window />
          <Door />
          <Window />
        </LowerLevel>
      </FirstFloor>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 123px;
  position: relative;
  margin-left: 15px;
  flex-shrink: 0;
`;
const Roof = styled.div`
  width: 120px;
  height: 5px;
  background: #898586;
  z-index: 4;
`;
const RoofShadow = styled.div`
  position: absolute;
  left: 6px;
  width: 110px;
  height: 10px;
  background: rgb(107 107 107 / 45%);
  z-index: 3;
`;
const ThirdFloor = styled.div`
  position: relative;
  background: #7da1c5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 110px;
  height: 55px;
  margin-left: 6px;
`;
const SecondFloor = styled.div`
  position: relative;
  background: #7da1c5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 55px;
`;
const FirstFloor = styled.div`
  background: #7da1c5;
`;
const BaseLevel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const UpperLevel = styled(BaseLevel)`
  padding: 10px 0;
`;
const LowerLevel = styled(BaseLevel)``;
const BaseWindow = styled.div`
  position: relative;
  width: 22px;
  height: 30px;
  background: #e6e6e6;
  border: 2px solid #505050;
  &::before {
    content: '';
    position: absolute;
    background: #505050;
    top: 13px;
    width: 100%;
    height: 2px;
  }
`;
const Window = styled(BaseWindow)``;
const ThirdFloorRailing = styled.div`
  width: 135px;
  height: 5px;
  position: absolute;
  background: #898586;
  bottom: 0;
  z-index: 4;
`;
const ThirdFloorRailingShadow = styled.div`
  position: absolute;
  width: 123px;
  height: 10px;
  background: rgb(107 107 107 / 45%);
  bottom: -5px;
  z-index: 3;
`;
const SecondFloorRailing = styled.div`
  width: 135px;
  height: 5px;
  position: absolute;
  background: #898586;
  left: -5px;
  bottom: 0;
  z-index: 4;
`;
const SecondFloorRailingShadow = styled.div`
  position: absolute;
  width: 123px;
  height: 10px;
  background: rgb(107 107 107 / 45%);
  left: 0;
  bottom: -5px;
  z-index: 3;
`;
const TailWindow = styled(BaseWindow)`
  position: relative;
  height: 37px;
  &::before {
    content: '';
    position: absolute;
    background: #505050;
    top: 40%;
    width: 100%;
    height: 2px;
  }
`;
const Door = styled.div`
  position: relative;
  width: 29px;
  height: 43px;
  background: rgb(150 76 42 / 72%);
  &::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 40px;
    bottom: 0;
    left: 3px;
    background: rgb(174, 116, 58);
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
export default School;
