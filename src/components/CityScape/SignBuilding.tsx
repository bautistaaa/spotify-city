import { CSSProperties, FC, MutableRefObject, useRef } from 'react';
import styled from 'styled-components/macro';
import { TimeOfDay } from '../../enums';
import useDegrees from '../../hooks/useDegrees';
import { RectResult } from '../../types';
import HintArrow from './HintArrow';

interface ColorPalette {
  building: string;
  roof: string;
  trim: string;
  window: string;
  windowFrame: string;
  groundFloor: string;
  groundFloorDoor: string;
  groundFloorDoorFrame: string;
  groundFloorWindow: string;
  groundFloorWindowFrame: string;
}
const COLOR_PALETTE: { [K in TimeOfDay]: ColorPalette } = {
  [TimeOfDay.Night]: {
    building: '#ac7274',
    roof: '#1a0303',
    trim: '#5c5666',
    window: '#d0d39b',
    windowFrame: '#1a0303',
    groundFloor: '#cfa39c',
    groundFloorDoor: '#1a0303',
    groundFloorDoorFrame: '#c0787b',
    groundFloorWindow: '#1a0303',
    groundFloorWindowFrame: '#c0787b',
  },
  [TimeOfDay.Twilight]: {
    building: '#ac7274',
    roof: '#1a0303',
    trim: '#5c5666',
    window: '#1a0303',
    windowFrame: '#d7aaa2',
    groundFloor: '#cfa39c',
    groundFloorDoor: '#1a0303',
    groundFloorDoorFrame: '#c0787b',
    groundFloorWindow: '#1a0303',
    groundFloorWindowFrame: '#c0787b',
  },
  [TimeOfDay.Day]: {
    building: '#d29da0',
    roof: '#1a0303',
    trim: '#5c5666',
    window: '#1a0303',
    windowFrame: '#f0d1cc',
    groundFloor: '#f5cbc4',
    groundFloorDoor: '#1a0303',
    groundFloorDoorFrame: '#df888c',
    groundFloorWindow: '#1a0303',
    groundFloorWindowFrame: '#df888c',
  },
};

const SignBuilding: FC<{
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
    <Wrapper ref={ref} onClick={onClick}>
      <ArrowWrapper>
        <HintArrow />
      </ArrowWrapper>
      <Roof background={colors.roof} />
      <Top background={colors.building}>
        <Sign timeOfDay={timeOfDay}>
          <div>H</div>
          <div>O</div>
          <div>T</div>
          <div>E</div>
          <div>L</div>
        </Sign>
        <Row>
          <Balcony>
            <Rail />
            <Rail />
            <Rail />
            <Rail />
          </Balcony>
          <WindowFrame background={colors.windowFrame}>
            <WindowGlass background={colors.window}>
              <WindowSpine background={colors.windowFrame} />
              <WindowSpine background={colors.windowFrame} />
            </WindowGlass>
          </WindowFrame>
          <WindowFrame background={colors.windowFrame}>
            <WindowGlass background={colors.window}>
              <WindowSpine background={colors.windowFrame} />
              <WindowSpine background={colors.windowFrame} />
            </WindowGlass>
          </WindowFrame>
        </Row>
        <Row>
          <Balcony hasLadder>
            <Rail />
            <Rail />
            <Rail />
            <Rail />
          </Balcony>
          <WindowFrame background={colors.windowFrame}>
            <WindowGlass background={colors.window}>
              <WindowSpine background={colors.windowFrame} />
              <WindowSpine background={colors.windowFrame} />
            </WindowGlass>
          </WindowFrame>
          <WindowFrame background={colors.windowFrame}>
            <WindowGlass background={colors.window}>
              <WindowSpine background={colors.windowFrame} />
              <WindowSpine background={colors.windowFrame} />
            </WindowGlass>
          </WindowFrame>
        </Row>
        <Row>
          <Balcony hasLadder>
            <Rail />
            <Rail />
            <Rail />
            <Rail />
          </Balcony>
          <WindowFrame background={colors.windowFrame}>
            <WindowGlass background={colors.window}>
              <WindowSpine background={colors.windowFrame} />
              <WindowSpine background={colors.windowFrame} />
            </WindowGlass>
          </WindowFrame>
          <WindowFrame background={colors.windowFrame}>
            <WindowGlass background={colors.window}>
              <WindowSpine background={colors.windowFrame} />
              <WindowSpine background={colors.windowFrame} />
            </WindowGlass>
          </WindowFrame>
        </Row>
        <Row>
          <Balcony hasLadder>
            <Rail />
            <Rail />
            <Rail />
            <Rail />
          </Balcony>
          <WindowFrame background={colors.windowFrame}>
            <WindowGlass background={colors.window}>
              <WindowSpine background={colors.windowFrame} />
              <WindowSpine background={colors.windowFrame} />
            </WindowGlass>
          </WindowFrame>
          <WindowFrame background={colors.windowFrame}>
            <WindowGlass background={colors.window}>
              <WindowSpine background={colors.windowFrame} />
              <WindowSpine background={colors.windowFrame} />
            </WindowGlass>
          </WindowFrame>
        </Row>
      </Top>
      <Bottom background={colors.groundFloor}>
        <Trim background={colors.trim} />
        <Door
          background={colors.groundFloorDoor}
          doorFrame={colors.groundFloorWindowFrame}
        />
        <Garage background={colors.groundFloorWindowFrame}>
          <GarageDoor
            background={colors.groundFloorWindow}
            doorFrame={colors.groundFloorWindowFrame}
          />
        </Garage>
      </Bottom>
      <div style={groundShadowStyle}></div>
    </Wrapper>
  );
};

const ArrowWrapper = styled.div`
  position: absolute;
  top: -65px;
  left: 50%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 15px;
  flex-shrink: 0;
  cursor: pointer;
`;
const Roof = styled.div<{ background: string }>`
  width: 128px;
  height: 20px;
  background: ${({ background }) => background};
  position: absolute;
  left: -4px;
  top: -15px;
  border-radius: 3px;
}
`;
const Top = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 120px;
  padding-top: 15px;
  background: ${({ background }) => background};
`;
const Bottom = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  width: 100%;
  height: 60px;
`;
const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Balcony = styled.div<{ hasLadder?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 48px;
  height: 21px;
  border: solid #1a0303;
  border-width: 2px 2px 5px 2px;
  z-index: 10;
  left: 5px;
  bottom: -3px;
  ${({ hasLadder }) =>
    hasLadder &&
    `
      &::before {
        content: '';
        position: absolute;
        right: 4px;
        bottom: 0;
        height: 62px;
        width: 2px;
        background: #1a0303;
        transform-origin: bottom right;
        transform: rotate(320deg);
      }
`}
`;
const Rail = styled.div`
  width: 100%;
  height: 1px;
  background: #1a0303;
`;
const WindowFrame = styled.div<{ background: string }>`
  position: relative;
  background: ${({ background }) => background};
  height: 36px;
  width: 26px;
  padding: 3px;
`;
const WindowGlass = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
`;
const WindowSpine = styled.div<{ background: string }>`
  width: 100%;
  height: 2px;
  background: ${({ background }) => background};
  margin-bottom: 4px;
`;
const Door = styled.div<{ background: string; doorFrame: string }>`
  position: absolute;
  width: 29px;
  height: 43px;
  bottom: 0;
  left: 10px;
  background: ${({ doorFrame }) => doorFrame};
  &::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 40px;
    bottom: 0;
    left: 3px;
    background: ${({ background }) => background};
  }
`;
const Garage = styled.div<{ background: string }>`
  position: absolute;
  width: 60px;
  height: 43px;
  bottom: 0;
  right: 5px;
  background: ${({ background }) => background};
  padding: 3px 3px 0;
`;
const GarageDoor = styled.div<{ background: string; doorFrame: string }>`
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ doorFrame }) => doorFrame};
  }
  &::before {
    left: 48%;
    height: 100%;
    width: 2px;
  }
  &::after {
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
  }
`;
const Trim = styled.div<{ background: string }>`
  height: 3px;
  width: 100%;
  position: absolute;
  background: ${({ background }) => background};
  top: 0;
`;
const Sign = styled.div<{ timeOfDay: TimeOfDay }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: -30px;
  height: 135px;
  width: 25px;
  background: #3f3939;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  color: white;
  font-weight: 500;
  ${({ timeOfDay }) =>
    timeOfDay !== TimeOfDay.Day &&
    `
  &::before,
  &::after {
    content: '';
    position: absolute;
    right: -7px;
    width: 5px;
    height: 3px;
    background: #4c3b3b;
  }
  &::before {
    top: 15px;
  }
  &::after {
    bottom: 15px;
  }
  > div {
    text-shadow: 0px 2px 7px, 0px 0px 4px, -2px -1px 1em #ff4444,
      0 0 0.5em #ff4444, 0 0 0.1em #ff4444;
  }
  > div:nth-child(2) {
    animation: blink 2s linear infinite 7s;
  }
  > div:last-child {
    animation: blink linear infinite 3s;
  }
  @keyframes blink {
    78% {
      color: inherit;
    }
    79% {
      color: #333;
    }
    81% {
      color: inherit;
    }
    82% {
      color: #333;
    }
    83% {
      color: inherit;
    }
    92% {
      color: #333;
    }
    92.5% {
      color: inherit;
    }
  }
`}
`;
export default SignBuilding;
