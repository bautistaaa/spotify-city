import { CSSProperties, FC, MutableRefObject, useRef } from 'react';
import styled from 'styled-components/macro';
import { TimeOfDay } from '../../enums';
import useDegrees from '../../hooks/useDegrees';
import { RectResult } from '../../types';

interface ColorPalette {
  building: string;
  awning: string;
  awningFront: string;
  roof: string;
  window: string;
  door: string;
}
const COLOR_PALETTE: { [K in TimeOfDay]: ColorPalette } = {
  [TimeOfDay.Night]: {
    building: '#a85f7a',
    awning: '#71364b',
    awningFront: '#90405d',
    roof: '#90405d',
    window: '#d0d39b',
    door: '#76798b',
  },
  [TimeOfDay.Twilight]: {
    building: '#d37799',
    awning: '#88405a',
    awningFront: '#a24869',
    roof: '#88405a',
    window: '#8e91a6',
    door: '#8e91a6',
  },
  [TimeOfDay.Day]: {
    building: '#da9ab1',
    awning: '#a5506e',
    awningFront: '#b3627f',
    roof: '#a5506e',
    window: '#abaec9',
    door: '#abaec9',
  },
};

const Shop: FC<{
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
      <Roof background={colors.roof} />
      <RoofShadow />
      <TopWindow background={colors.window} />
      <Awning bottomColor={colors.awningFront} topColor={colors.awning} />
      <AwningShadow />
      <BottomWindow background={colors.door} />
      <div style={groundShadowStyle}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ background: string }>`
  width: 100px;
  height: 130px;
  position: relative;
  background: ${({ background }) => background};
  margin-left: 10px;
  flex-shrink: 0;
`;
const Roof = styled.div<{ background: string }>`
  position: absolute;
  width: 110px;
  height: 12px;
  top: -2px;
  left: -5px;
  background: ${({ background }) => background};
  z-index: 4;
`;
const RoofShadow = styled.div`
  position: absolute;
  width: 100px;
  height: 12px;
  background: rgb(127 83 99 / 45%);
  top: 5px;
  bottom: 37px;
  left: 0px;
  z-index: 3;
`;
const TopWindow = styled.div<{ background: string }>`
  position: absolute;
  width: 70px;
  height: 50px;
  background: ${({ background }) => background};
  top: 5px;
  left: 14px;
  border: 2px solid #505050;
  z-index: 2;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #505050;
    left: 0;
    right: 0;
    bottom: 15px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 15px;
    background: #505050;
    left: 50%;
    bottom: 0;
  }
`;
const BottomWindow = styled.div<{ background: string }>`
  position: absolute;
  width: 70px;
  height: 50px;
  background: ${({ background }) => background};
  bottom: 0;
  left: 14px;
  border: 2px solid #505050;
  border-bottom: none;
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background: #505050;
    bottom: 0;
    top: 0;
    right: 30px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 8px;
    background: #505050;
    right: 23px;
    bottom: 15px;
  }
`;
const Awning = styled.div<{ bottomColor: string; topColor: string }>`
  position: absolute;
  width: 86px;
  height: 12px;
  background: ${({ bottomColor }) => bottomColor};
  bottom: 45px;
  left: 7px;
  z-index: 5;
  &::before {
    content: '';
    position: absolute;
    width: 56px;
    top: -13px;
    border-bottom: ${({ topColor }) => `13px solid ${topColor}`};
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }
`;
const AwningShadow = styled.div`
  position: absolute;
  width: 80px;
  height: 12px;
  background: rgb(127 83 99 / 45%);
  bottom: 37px;
  left: 10px;
  z-index: 4;
`;

export default Shop;
