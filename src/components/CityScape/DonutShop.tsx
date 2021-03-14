import React, { CSSProperties, FC, MutableRefObject, useRef } from 'react';
import styled from 'styled-components/macro';
import { TimeOfDay } from '../../enums';
import { RectResult } from '../../types';
import useDegrees from '../../hooks/useDegrees';
import HintArrow from './HintArrow';

interface ColorPalette {
  building: string;
  donutOuter: string;
  donutInner: string;
  donutCenter: string;
  donutLegs: string;
  roof: string;
  window: string;
  windowSill: string;
  door: string;
  awning: string;
  awningText: string;
}
const COLOR_PALETTE: { [K in TimeOfDay]: ColorPalette } = {
  [TimeOfDay.Night]: {
    building: '#ab9d83',
    donutOuter: '#ab9d83',
    donutInner: '#3c081d',
    donutCenter: '#3f588b',
    donutLegs: '#dcd1be',
    roof: '#999999',
    window: '#d0d39b',
    windowSill: '#999999',
    door: '#a38e6c',
    awning: '#3c081d',
    awningText: '#fffdf5',
  },
  [TimeOfDay.Twilight]: {
    building: '#ccbc9e',
    donutOuter: '#ccbc9e',
    donutInner: '#3c081d',
    donutCenter: '#b65a69',
    donutLegs: '#dcd1be',
    roof: '#c6c5c5',
    window: '#87a5ae',
    windowSill: '#c6c5c5',
    door: '#b8a482',
    awning: '#3c081d',
    awningText: '#fffdf5',
  },
  [TimeOfDay.Day]: {
    building: '#f0debd',
    donutOuter: '#f0debd',
    donutInner: '#5d0e2d',
    donutCenter: '#a2c9e3',
    donutLegs: '#fbf3e6',
    roof: '#ffffff',
    window: '#a2c7d1',
    windowSill: '#ffffff',
    door: '#cdb996',
    awning: '#5a0e2d',
    awningText: '#fcf4e7',
  },
};

const DonutShop: FC<{
  wrapperRect?: RectResult;
  sunMoonRect?: RectResult;
  x: number;
  timeOfDay: TimeOfDay;
  onClick: () => void;
}> = ({ wrapperRect, sunMoonRect, x, timeOfDay, onClick }) => {
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
    <Wrapper onClick={onClick}>
      <Roof>
        <ArrowWrapper>
          <HintArrow />
        </ArrowWrapper>
        <DonutOuter background={colors.donutOuter}>
          <DonutInner background={colors.donutInner}>
            <DonutCenter background={colors.donutCenter} />
          </DonutInner>
        </DonutOuter>
        <DonutHolderLeft background={colors.donutLegs} />
        <DonutHolderRight background={colors.donutLegs} />
        <Edge background={colors.roof} />
      </Roof>
      <MainFloor ref={ref} background={colors.building}>
        <Window background={colors.window} sill={colors.windowSill} />
        <Awning
          background={colors.awning}
          textColor={colors.awningText}
          timeOfDay={timeOfDay}
        >
          DONUTS
        </Awning>
        <Door background={colors.door} />
        <div style={groundShadowStyle}></div>
      </MainFloor>
    </Wrapper>
  );
};

const ArrowWrapper = styled.div`
  position: absolute;
  top: -133px;
  left: 48%;
`;
const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 30px;
  flex-shrink: 0;
`;
const Roof = styled.div`
  position: relative;
`;
const MainFloor = styled.div<{ background: string }>`
  position: relative;
  width: 150px;
  height: 80px;
  background: ${({ background }) => background};
`;
const Edge = styled.div<{ background: string }>`
  position: relative;
  left: -5px;
  background: ${({ background }) => background};
  width: 160px;
  height: 13px;
  border: 2px solid black;
  border-radius: 2px;
`;
const Window = styled.div<{ background: string; sill: string }>`
  position: absolute;
  width: 75px;
  height: 30px;
  left: 10px;
  bottom: 20px;
  background: ${({ background }) => background};
  border: 2px solid black;
  border-bottom: none;
  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: -6px;
    width: 79px;
    height: 4px;
    background: ${({ sill }) => sill};
    border: 2px solid black;
    border-radius: 2px;
  }
`;
const Awning = styled.div<{
  background: string;
  textColor: string;
  timeOfDay: TimeOfDay;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 140px;
  height: 32px;
  left: 5px;
  top: 10px;
  background: ${({ background }) => background};
  border: 2px solid black;
  z-index: 10;
  color: ${({ textColor }) => textColor};
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 3.6px;
  ${({ timeOfDay }) =>
    timeOfDay !== TimeOfDay.Day &&
    `
  text-shadow: 0px 0px 2px, 0px 0px 3px, -2px -1px 1em #c29f3b, 0 0 0.5em #c29f3b, 0 0 0.1em #c29f3b;
  `}
`;
const Door = styled.div<{ background: string }>`
  position: absolute;
  right: 10px;
  bottom: 0;
  height: 50px;
  width: 28px;
  border: 2px solid black;
  border-bottom: none;
  background: ${({ background }) => background};
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
const BaseDonutHolder = styled.div<{ background: string }>`
  position: absolute;
  bottom: 0;
  background: ${({ background }) => background};
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
const DonutOuter = styled.div<{ background: string }>`
  position: absolute;
  bottom: 23px;
  left: 25%;
  background: ${({ background }) => background};
  height: 75px;
  width: 75px;
  border-radius: 100%;
  border: 2px solid black;
  z-index: 10;
`;
const DonutInner = styled.div<{ background: string }>`
  position: absolute;
  bottom: 10px;
  left: 10px;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 2px solid black;
  z-index: 10;
  background: ${({ background }) => background};
`;
const DonutCenter = styled.div<{ background: string }>`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  border: 2px solid black;
  background: ${({ background }) => background};
  left: 10px;
  bottom: 10px;
  z-index: 10;
`;

export default DonutShop;
