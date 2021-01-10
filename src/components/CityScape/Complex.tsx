import styled from 'styled-components/macro';

const Complex = () => {
  return (
    <Wrapper>
      <Roof />
      <RoofShadow />
      <ThirdFloor>
        <Window />
        <Window />
        <Window />
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
        <Light />
        <LightBeam />
        <BigWindow>
          <Door />
        </BigWindow>
        <Plant />
      </FirstFloor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 125px;
  margin-left: 15px;
  flex-shrink: 0;
`;
const ThirdFloor = styled.div`
  background: rgb(212, 203, 148);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 10px 5px;
`;
const SecondFloor = styled.div`
  background: rgb(212, 203, 148);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 10px 5px;
`;
const FirstFloor = styled.div`
  height: 70px;
  background: rgb(156, 151, 153);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;
const Light = styled.div`
  position: absolute;
  bottom: 52px;
  right: 6px;
  width: 13px;
  height: 8px;
  background: #6b8e91;
  &::after {
    content: '';
    position: absolute;
    width: 11px;
    height: 2px;
    background: rgb(107 107 107 / 45%);
    left: 1px;
    top: 8px;
  }
`;
const LightBeam = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 0;
  right: 0;
  clip-path: polygon(50% 0, 71% 0, 93% 100%, 24% 100%);
  background: linear-gradient(
    180deg,
    rgb(235 235 235 / 80%) 0%,
    rgb(208 208 205 / 20%) 100%
  );
  height: 52px;
  width: 32px;
`;
const BaseWindow = styled.div`
  width: 25px;
  height: 27px;
  background: #e6e6e6;
  border: 2px solid #505050;
  z-index: 2;
`;
const Window = styled(BaseWindow)`
  bottom: 80px;
  left: 14px;
`;
const SecondFloorRailing = styled.div`
  width: 135px;
  height: 5px;
  position: absolute;
  left: -5px;
  bottom: 0;
  background: #898586;
  z-index: 4;
`;
const SecondFloorRailingShadow = styled.div`
  position: absolute;
  width: 125px;
  height: 3px;
  background: rgb(141, 141, 141);
  left: 0;
  bottom: -3px;
  z-index: 3;
`;
const ThirdFloorRailing = styled.div`
  width: 135px;
  height: 5px;
  position: absolute;
  background: #898586;
  left: -5px;
  top: 43px;
  z-index: 4;
`;
const ThirdFloorRailingShadow = styled.div`
  position: absolute;
  width: 125px;
  height: 3px;
  background: rgb(127 83 99 / 45%);
  left: 0;
  top: 48px;
  z-index: 3;
`;
const Roof = styled.div`
  width: 135px;
  height: 12px;
  position: absolute;
  background: #898586;
  left: -5px;
  top: -5px;
  z-index: 5;
`;
const RoofShadow = styled.div`
  position: absolute;
  width: 125px;
  height: 12px;
  background: rgb(127 83 99 / 45%);
  top: -1px;
  bottom: 37px;
  left: 0px;
  z-index: 3;
`;
const BigWindow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  width: 70px;
  height: 60px;
  background: #d4cb94;
  border: 2px solid #505050;
  border-bottom: none;
`;
const Door = styled.div`
  position: relative;
  height: 45px;
  width: 31px;
  background: #b9b5b7;
  border: 2px solid #505050;
  border-bottom: none;
  &::before {
    content: '';
    position: absolute;
    bottom: 1px;
    right: 3px;
    height: 36px;
    width: 17px;
    background: #d4cb94;
    border: 2px solid #505050;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 15px;
    right: 20px;
    height: 8px;
    width: 2px;
    background: #d4d4d4;
    border: 2px solid #505050;
  }
`;
const Plant = styled.div`
  position: absolute;
  bottom: 0;
  left: 15px;
  height: 30px;
  width: 2px;
  background: brown;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: -9px;
    width: 20px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: rgb(33, 138, 33);
    background: radial-gradient(
      circle,
      rgb(60 158 60) 0%,
      rgb(123 172 123) 66%
    );
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -9px;
    width: 20px;
    height: 10px;
    background: #c5c5c5;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

export default Complex;
