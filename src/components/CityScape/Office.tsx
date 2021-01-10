import styled from 'styled-components/macro';

const Office = () => {
  return (
    <Base>
      <TopFloor>
        <TopBalcony />
        <Chimney />
        <TopBalconyShadow />
        <TopFloorWindow />
      </TopFloor>
      <SecondFloor>
        <UpperBalcony />
        <UpperBalconyShadow />
        <SecondFloorWindow />
      </SecondFloor>
      <LowerBalcony />
      <LowerBalconyShadow />
      <LeftLight />
      <LeftLightBeam />
      <RightLight />
      <RightLightBeam />
      <BottomWindow />
      <DoorAwning />
    </Base>
  );
};

const Base = styled.div`
  width: 123px;
  height: 100px;
  position: absolute;
  bottom: 30px;
  left: 600px;
  background: rgb(147, 176, 178);
  z-index: 10;
`;
const Light = styled.div`
  position: absolute;
  bottom: 60px;
  width: 25px;
  height: 8px;
  background: #6b8e91;
  &::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 2px;
    background: rgb(107 107 107 / 45%);
    left: 1px;
    top: 8px;
  }
`;
const BaseLightBeam = styled.div`
  bottom: 0px;
  z-index: 100;
  position: absolute;
  clip-path: polygon(34% 0, 54% 0, 67% 100%, 22% 100%);
  background: rgb(230, 210, 40);
  background: linear-gradient(
    180deg,
    rgb(216, 219, 154) 0%,
    rgba(230, 210, 40, 0.20346050613496935) 100%
  );
  height: 60px;
  width: 80px;
`;
const RightLightBeam = styled(BaseLightBeam)`
  right: -11px;
`;
const LeftLightBeam = styled(BaseLightBeam)``;

const RightLight = styled(Light)`
  right: 22px;
`;
const LeftLight = styled(Light)`
  left: 22px;
`;
const BottomWindow = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  background: #dce0e1;
  bottom: 0;
  left: 11px;
  border: 2px solid #505050;
  border-bottom: none;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background: #505050;
    bottom: 0;
    top: 0;
  }

  &::before {
    left: 30%;
  }
  &::after {
    right: 30%;
  }
`;
const DoorAwning = styled.div`
  height: 8px;
  width: 45px;
  position: absolute;
  background: #e9e9e9;
  bottom: 43px;
  left: 38px;
  border: 1px solid black;
`;
const LowerBalcony = styled.div`
  height: 23px;
  width: 130px;
  position: absolute;
  left: -3px;
  bottom: 81px;
  background: #6b8e91;
  z-index: 4;
`;
const LowerBalconyShadow = styled.div`
  position: absolute;
  width: 123px;
  height: 10px;
  background: rgb(107 107 107 / 45%);
  left: 0;
  top: 14px;
  z-index: 3;
`;
const SecondFloor = styled(Base)`
  height: 90px;
  top: -90px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const SecondFloorWindow = styled.div`
  position: relative;
  width: 90%;
  height: 70%;
  background: #dce0e1;
  border: 2px solid #505050;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background: #505050;
    bottom: 0;
    top: 0;
  }

  &::before {
    left: 30%;
  }
  &::after {
    right: 30%;
  }
`;
const UpperBalcony = styled.div`
  height: 23px;
  width: 130px;
  position: absolute;
  left: -3px;
  bottom: 78px;
  background: #6b8e91;
  z-index: 4;
`;
const UpperBalconyShadow = styled.div`
  position: absolute;
  width: 123px;
  height: 10px;
  background: rgb(107 107 107 / 45%);
  left: 0;
  top: 6px;
  z-index: 3;
`;

const TopFloor = styled(Base)`
  height: 90px;
  top: -180px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
const TopFloorWindow = styled.div`
  position: relative;
  width: 90%;
  height: 70%;
  background: #dce0e1;
  border: 2px solid #505050;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background: #505050;
    bottom: 0;
    top: 0;
  }

  &::before {
    left: 30%;
  }
  &::after {
    right: 30%;
  }
`;
const TopBalcony = styled.div`
  height: 16px;
  width: 130px;
  position: absolute;
  left: -3px;
  bottom: 81px;
  background: #6b8e91;
  z-index: 4;
  &::after {
    content: '';
    position: absolute;
    top: -20px;
    width: 0;
    height: 0;
    border-left: 65px solid transparent;
    border-right: 65px solid transparent;
    border-bottom: 20px solid #6b8e91;
  }
`;
const Chimney = styled.div`
  content: '';
  position: absolute;
  top: -30px;
  width: 15px;
  height: 30px;
  left: 11px;
  background: #979f9f;
`;
const TopBalconyShadow = styled.div`
  position: absolute;
  width: 123px;
  height: 10px;
  background: rgb(107 107 107 / 45%);
  left: 0;
  top: 6px;
  z-index: 3;
`;
export default Office;
