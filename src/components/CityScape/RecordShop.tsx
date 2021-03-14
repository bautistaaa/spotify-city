import { CSSProperties, FC, MutableRefObject, useRef } from 'react';
import styled from 'styled-components/macro';
import Headphones from './Headphones';
import { TimeOfDay } from '../../enums';
import { RectResult } from '../../types';
import useDegrees from '../../hooks/useDegrees';
import HintArrow from './HintArrow';

interface ColorPalette {
  building: string;
  awning: string;
  awningRed: string;
  roof: string;
  window: string;
  door: string;
  billboard: string;
  fill: string;
}
const COLOR_PALETTE: { [K in TimeOfDay]: ColorPalette } = {
  [TimeOfDay.Night]: {
    building: '#5897a8',
    awning: '#cfcfcf',
    awningRed: '#cb3232',
    roof: '#cfcfcf',
    window: '#d0d39b',
    door: '#cfcfcf',
    billboard: '#2a7396',
    fill: '#cfcfcf',
  },
  [TimeOfDay.Twilight]: {
    building: '#63aabd',
    awning: '#d4d4d4',
    awningRed: '#ad2a2a',
    roof: '#d4d4d4',
    window: '#84879e',
    door: '#d4d4d4',
    billboard: '#2f86af',
    fill: '#d4d4d4',
  },
  [TimeOfDay.Day]: {
    building: '#6fbed4',
    awning: '#eaeaea',
    awningRed: '#cb3232',
    roof: '#eaeaea',
    window: '#9598b1',
    door: '#eaeaea',
    billboard: '#2f86af',
    fill: 'white',
  },
};

const RecordShop: FC<{
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
    <Wrapper ref={ref} onClick={onClick} background={colors.building}>
      <Billboard background={colors.billboard}>
        <BillboardArrowWrapper>
          <HintArrow />
        </BillboardArrowWrapper>
        <Headphones fill={colors.fill} />
      </Billboard>
      <Roof background={colors.roof} />
      <RoofShadow />
      <Awning background={colors.awning} awningRed={colors.awningRed}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Awning>
      <AwningShadow />
      <WindowBorder />
      <Window background={colors.window} />
      <Door background={colors.door} />
      <div style={groundShadowStyle}></div>
    </Wrapper>
  );
};

const BillboardArrowWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
`;
const Wrapper = styled.div<{ background: string }>`
  cursor: pointer;
  width: 175px;
  height: 90px;
  position: relative;
  background: ${({ background }) => background};
  margin-left: 15px;
  flex-shrink: 0;
`;
const Roof = styled.div<{ background: string }>`
  position: absolute;
  background: ${({ background }) => background};
  width: 185px;
  height: 12px;
  top: -2px;
  left: -5px;
  z-index: 4;
`;
const RoofShadow = styled.div`
  position: absolute;
  width: 175px;
  height: 12px;
  background: rgb(154 154 154 / 56%);
  top: 5px;
  bottom: 37px;
  left: 0px;
  z-index: 3;
`;
const Awning = styled.div<{ background: string; awningRed: string }>`
  position: absolute;
  top: 20px;
  width: 130px;
  height: 30px;
  left: 29px;
  border: 2px solid #505050;
  background: ${({ background }) => background};
  z-index: 4;
  & > div:nth-child(odd) {
    display: inline-block;
    width: 10%;
    height: 100%;
    background: ${({ awningRed }) => awningRed};
  }
  & > div:nth-child(even) {
    display: inline-block;
    width: 10%;
    height: 100%;
  }
`;
const AwningShadow = styled.div`
  position: absolute;
  width: 123px;
  height: 10px;
  left: 31px;
  top: 47px;
  background: rgb(117 116 116 / 60%);
  z-index: 3;
`;
const WindowBorder = styled.div`
  position: absolute;
  width: 90px;
  height: 36px;
  left: 32px;
  top: 47px;
  border: 2px solid #505050;
`;
const Window = styled.div<{ background: string }>`
  position: absolute;
  width: 84px;
  height: 33px;
  left: 35px;
  top: 47px;
  border: 2px solid #505050;
  background: ${({ background }) => background};
`;
const Door = styled.div<{ background: string }>`
  position: absolute;
  right: 23px;
  height: 42px;
  width: 28px;
  border: 2px solid #505050;
  bottom: 0;
  border-bottom: none;
  background: ${({ background }) => background};
  &::after {
    content: '';
    position: absolute;
    left: 2px;
    bottom: 16px;
    height: 3px;
    width: 3px;
    border-radius: 3px;
    background: #505050;
  }
`;
const Billboard = styled.div<{ background: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -96px;
  left: 20px;
  height: 80px;
  width: 125px;
  padding: 2px;
  background: ${({ background }) => background};
  color: white;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 4px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    height: 16px;
    width: 3px;
    background: ${({ background }) => background};
  }
  &::before {
    left: 29%;
  }
  &::after {
    right: 29%;
  }
`;

export default RecordShop;
