import { CSSProperties, FC, MutableRefObject, useRef } from 'react';
import styled from 'styled-components/macro';
import { TimeOfDay } from '../../enums';
import useDegrees from '../../hooks/useDegrees';
import { RectResult } from '../../types';

interface ColorPalette {
  concrete: string;
  building: string;
  window: string;
  bush: string;
  pot: string;
  doorFrame: string;
  door: string;
}
const COLOR_PALETTE: { [K in TimeOfDay]: ColorPalette } = {
  [TimeOfDay.Night]: {
    concrete: '#928f90',
    building: 'rgb(176, 170, 131)',
    window: '#d3dfbf',
    bush: 'radial-gradient( circle,rgb(49 125 49) 0%,rgb(103 152 103) 66% )',
    pot: '#777774',
    doorFrame: '#9c999a',
    door: '#9e986e',
  },
  [TimeOfDay.Twilight]: {
    concrete: '#928f90',
    building: 'rgb(212, 203, 148)',
    window: '#c9c9c9',
    bush: 'radial-gradient( circle,rgb(49 125 49) 0%,rgb(103 152 103) 66% )',
    pot: '#777774',
    doorFrame: '#9c999a',
    door: '#d4cb94',
  },
  [TimeOfDay.Day]: {
    concrete: '#aea7a9',
    building: '#e4ddb0',
    window: '#e6e6e6',
    bush: 'radial-gradient( circle,rgb(60 158 60) 0%,rgb(123 172 123) 66% )',
    pot: '#c5c5c5',
    doorFrame: '#b9b5b7',
    door: '#d4cb94',
  },
};

const Complex: FC<{
  wrapperRect?: RectResult;
  sunMoonRect?: RectResult;
  x: number;
  timeOfDay: TimeOfDay;
}> = ({ wrapperRect, sunMoonRect, x, timeOfDay }) => {
  const colors = COLOR_PALETTE[timeOfDay];
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const degrees = useDegrees(ref, {
    wrapperRect,
    sunMoonRect,
    x,
  });

  const groundShadowStyle: CSSProperties = {
    background: `linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0) 100%
    )`,
    position: `absolute`,
    left: '0',
    width: '100%',
    height: '50px',
    transformOrigin: '0 0',
    pointerEvents: 'none',
    transform: `skewX(${degrees}deg)`,
    bottom: '-50px',
  };

  return (
    <Wrapper ref={ref}>
      <Roof background={colors.concrete} />
      <RoofShadow />
      <ThirdFloor background={colors.building}>
        <Window background={colors.window} />
        <Window background={colors.window} />
        <Window background={colors.window} />
        <ThirdFloorRailing background={colors.concrete} />
        <ThirdFloorRailingShadow />
      </ThirdFloor>
      <SecondFloor background={colors.building}>
        <Window background={colors.window} />
        <Window background={colors.window} />
        <Window background={colors.window} />
        <SecondFloorRailing background={colors.concrete} />
        <SecondFloorRailingShadow />
      </SecondFloor>
      <FirstFloor background={colors.concrete}>
        <Light />
        <LightBeam timeOfDay={timeOfDay} />
        <BigWindow background={colors.building}>
          <Door doorFrame={colors.doorFrame} door={colors.door} />
        </BigWindow>
        <Plant bushColor={colors.bush} potColor={colors.pot} />
      </FirstFloor>
      <div style={groundShadowStyle}></div>
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
const ThirdFloor = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 10px 5px;
`;
const SecondFloor = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 10px 5px;
`;
const FirstFloor = styled.div<{ background: string }>`
  height: 70px;
  background: ${({ background }) => background};
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
const LightBeam = styled.div<{ timeOfDay: TimeOfDay }>`
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
  ${({ timeOfDay }) =>
    timeOfDay !== TimeOfDay.Day &&
    `
      height: 52px;
      width: 32px;
`}
`;
const BaseWindow = styled.div<{ background: string }>`
  width: 25px;
  height: 27px;
  background: ${({ background }) => background};
  border: 2px solid #505050;
  z-index: 2;
`;
const Window = styled(BaseWindow)`
  bottom: 80px;
  left: 14px;
`;
const SecondFloorRailing = styled.div<{ background: string }>`
  width: 135px;
  height: 5px;
  position: absolute;
  left: -5px;
  bottom: 0;
  background: ${({ background }) => background};
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
const ThirdFloorRailing = styled.div<{ background: string }>`
  width: 135px;
  height: 5px;
  position: absolute;
  background: ${({ background }) => background};
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
const Roof = styled.div<{ background: string }>`
  width: 135px;
  height: 12px;
  position: absolute;
  background: ${({ background }) => background};
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
const BigWindow = styled.div<{ background: string }>`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  width: 70px;
  height: 60px;
  background: ${({ background }) => background};
  border: 2px solid #505050;
  border-bottom: none;
`;
const Door = styled.div<{ doorFrame: string; door: string }>`
  position: relative;
  height: 45px;
  width: 31px;
  background: ${({ doorFrame }) => doorFrame};
  border: 2px solid #505050;
  border-bottom: none;
  &::before {
    content: '';
    position: absolute;
    bottom: 1px;
    right: 3px;
    height: 36px;
    width: 17px;
    background: ${({ door }) => door};
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
const Plant = styled.div<{ bushColor: string; potColor: string }>`
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
    background: ${({ bushColor }) => bushColor};
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -9px;
    width: 20px;
    height: 10px;
    background: ${({ potColor }) => potColor};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

export default Complex;
