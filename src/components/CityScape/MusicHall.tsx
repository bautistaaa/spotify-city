import React, { CSSProperties, FC, MutableRefObject, useRef } from 'react';
import styled from 'styled-components/macro';
import { TimeOfDay } from '../../enums';
import useDegrees from '../../hooks/useDegrees';
import { RectResult } from '../../types';
import HintArrow from './HintArrow';

interface ColorPalette {
  building: string;
  door: string;
  doorBorder: string;
  roof: string;
}
const COLOR_PALETTE: { [K in TimeOfDay]: ColorPalette } = {
  [TimeOfDay.Day]: {
    building: '#828181',
    door: '#6e4343',
    doorBorder: '#aeacac',
    roof: '#828181',
  },
  [TimeOfDay.Twilight]: {
    building: '#3e3e3e',
    door: '#252525',
    doorBorder: 'gray',
    roof: '#5d3d47',
  },
  [TimeOfDay.Night]: {
    building: '#1a1717',
    door: '#252525',
    doorBorder: 'gray',
    roof: '#331721',
  },
};

const MusicHall: FC<{
  wrapperRect?: RectResult;
  sunMoonRect?: RectResult;
  timeOfDay: TimeOfDay;
  onClick: () => void;
  x: number;
}> = ({ wrapperRect, sunMoonRect, timeOfDay, onClick, x }) => {
  const colorPalette = COLOR_PALETTE[timeOfDay];
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
    <Wrapper
      ref={ref}
      background={colorPalette.building}
      roof={colorPalette.roof}
      onClick={() => onClick()}
    >
      <MusicHallArrowWrapper>
        <HintArrow />
      </MusicHallArrowWrapper>
      <Marquee timeOfDay={timeOfDay}>
        <div>NORVA</div>
      </Marquee>
      <BottomRow>
        <Barrier>
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
        </Barrier>
        <Entrance
          door={colorPalette.door}
          doorBorder={colorPalette.doorBorder}
        />
        <Barrier>
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
        </Barrier>
      </BottomRow>
      <div style={groundShadowStyle}></div>
    </Wrapper>
  );
};
const MusicHallArrowWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 160px;
`;
const Wrapper = styled.div<{ background: string; roof: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 200px;
  width: 300px;
  background: ${({ background }) => background};
  margin-left: 10px;
  flex-shrink: 0;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ roof }) => roof};
  }

  &::before {
    height: 20px;
    top: -20px;
    width: 50px;
    left: 0;
  }
  &::after {
    width: 40px;
    height: 10px;
    top: -10px;
    left: 50px;
  }
`;
const Entrance = styled.div<{ door: string; doorBorder: string }>`
  height: 70px;
  width: 85px;
  background: ${({ door }) => door};
  border: ${({ doorBorder }) => `10px solid ${doorBorder}`};
  border-bottom: none;
`;
const BottomRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-grow: 1;
`;
const Barrier = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #b9b9b9;
  height: 34px;
  width: 106px;
  border-radius: 2px;
`;
const Spine = styled.div`
  height: 100%;
  width: 2px;
  background: #b9b9b9;
`;
const Marquee = styled.div<{ timeOfDay: TimeOfDay }>`
  margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 7.7px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 220px;
  height: 40px;
  color: #fff;
  ${({ timeOfDay }) =>
    timeOfDay !== TimeOfDay.Day &&
    `
  animation: neon 1.5s ease-in-out infinite alternate;
`}
  @keyframes neon {
    from {
      text-shadow: 0 0 10px #ddd, 0 0 20px #ddd, 0 0 30px #fff, 0 0 40px #ff1177,
        0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;
    }
    to {
      text-shadow: 0 0 5px #fff, 0 0 10px #ddd, 0 0 15px #ddd, 0 0 20px #ff1177,
        0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177;
    }
  }
`;

export default MusicHall;
