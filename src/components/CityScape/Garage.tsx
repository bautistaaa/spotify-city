import { CSSProperties, FC, MutableRefObject, useRef } from 'react';
import styled from 'styled-components/macro';
import { TimeOfDay } from '../../enums';
import useDegrees from '../../hooks/useDegrees';
import { RectResult } from '../../types';

interface ColorPalette {
  building: string;
  awning: string;
  awningFront: string;
  garage: string;
  window: string;
  door: string;
  roof: string;
}
const COLOR_PALETTE: { [K in TimeOfDay]: ColorPalette } = {
  [TimeOfDay.Night]: {
    building: '#ab9f71',
    awning: '#51212a',
    awningFront: '#863a48',
    garage: '#807f7f',
    window: '#d0d39b',
    door: '#abaec9',
    roof: '#51212a',
  },
  [TimeOfDay.Twilight]: {
    building: '#ab9f71',
    awning: '#70303d',
    awningFront: '#923e4e',
    garage: '#9d9b9b',
    window: '#738c9b',
    door: '#cecece',
    roof: '#722e3a',
  },
  [TimeOfDay.Day]: {
    building: '#dfcf92',
    awning: '#863948',
    awningFront: '#a34658',
    garage: '#cecece',
    window: '#7e97a7',
    door: '#cecece',
    roof: '#903a49',
  },
};
const Garage: FC<{
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
    <Wrapper ref={ref} background={colors.building}>
      <Roof background={colors.roof} timeOfDay={timeOfDay} />
      <Awning awningFront={colors.awningFront} awning={colors.awning} />
      <AwningShadow timeOfDay={timeOfDay} />
      <Door background={colors.door} />
      <Light timeOfDay={timeOfDay} />
      <GarageDoor background={colors.garage} window={colors.window}>
        <GarageDoorWindownFrame />
      </GarageDoor>
      <div style={groundShadowStyle}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ background: string }>`
  width: 175px;
  height: 90px;
  position: relative;
  margin-left: 10px;
  background: ${({ background }) => background};
  flex-shrink: 0;
`;
const Light = styled.div<{ timeOfDay: TimeOfDay }>`
  z-index: 100;
  position: absolute;
  bottom: 0;
  left: 7px;
  ${({ timeOfDay }) =>
    timeOfDay !== TimeOfDay.Day &&
    `
    clip-path: polygon(34% 0, 71% 0, 98% 100%, 3% 100%);
    background: linear-gradient(
      180deg,
      rgb(235 235 235 / 90%) 0%,
      rgb(208 208 205 / 20%) 100%
    );
    height: 45px;
    width: 45px;
`};
`;
const Awning = styled.div<{ awningFront: string; awning: string }>`
  position: absolute;
  width: 45px;
  height: 8px;
  background: ${({ awningFront }) => awningFront};
  bottom: 45px;
  left: 7px;
  z-index: 5;
  &::before {
    content: '';
    position: absolute;
    width: 29px;
    top: -9px;
    border-bottom: ${({ awning }) => `9px solid ${awning}`};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;
const AwningShadow = styled.div<{ timeOfDay: TimeOfDay }>`
  position: absolute;
  ${({ timeOfDay }) =>
    timeOfDay === TimeOfDay.Day &&
    `
  height: 8px;
`}
  width: 39px;
  background: rgb(118 118 118 / 45%);
  bottom: 38px;
  left: 10px;
  z-index: 4;
`;
const Door = styled.div<{ background: string }>`
  position: absolute;
  width: 29px;
  height: 43px;
  bottom: 0;
  left: 15px;
  background: rgb(32, 32, 32);
  &::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 40px;
    bottom: 0;
    left: 3px;
    background: ${({ background }) => background};
  }
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    bottom: 18px;
    border-radius: 50%;
    right: 6px;
    background: gray;
  }
`;
const GarageDoor = styled.div<{ background: string; window: string }>`
  position: absolute;
  width: 100px;
  height: 62px;
  bottom: 0;
  right: 15px;
  background: ${({ background }) => background};
  border: 2px solid gray;
  border-bottom: none;
  &::after {
    content: '';
    position: absolute;
    top: 16px;
    width: 100%;
    height: 25px;
    background: ${({ window }) => window};
    border: 1px solid grey;
    border-left: none;
    border-right: none;
  }
`;
const GarageDoorWindownFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: grey;
  z-index: 5;
`;
const Roof = styled.div<{ background: string; timeOfDay: TimeOfDay }>`
  position: absolute;
  background: ${({ background }) => background};
  border-radius: 1px;
  width: 185px;
  height: 12px;
  top: -2px;
  left: -5px;
  z-index: 4;
  ${({ timeOfDay }) =>
    timeOfDay === TimeOfDay.Day &&
    `
  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    height: 4px;
    width: 175px;
    background: rgb(177, 168, 134);
    left: 5px;
  }
`}
`;

export default Garage;
