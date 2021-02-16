import { CSSProperties, FC, MutableRefObject, useRef } from 'react';
import styled from 'styled-components/macro';
import { TimeOfDay } from '../../enums';
import useDegrees from '../../hooks/useDegrees';
import { RectResult } from '../../types';

interface ColorPalette {
  building: string;
  window: string;
  roof: string;
  door: string;
  doorFrame: string;
  doorknob: string;
}
const COLOR_PALETTE: { [K in TimeOfDay]: ColorPalette } = {
  [TimeOfDay.Night]: {
    building: '#7191a9',
    window: '#d0d39b',
    door: '#895b2e',
    doorFrame: '#7e4329',
    doorknob: '#ceb426',
    roof: '#747071',
  },
  [TimeOfDay.Twilight]: {
    building: '#85a9c4',
    window: '#cecfd4',
    door: '#9d6935',
    doorFrame: '#7e4329',
    doorknob: '#ceb426',
    roof: '#747071',
  },
  [TimeOfDay.Day]: {
    building: '#96bedc',
    window: '#eeeff5',
    door: 'rgb(174,116,58)',
    doorFrame: 'rgb(150 76 42 / 72%)',
    doorknob: 'gold',
    roof: '#898586',
  },
};

const School: FC<{
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
      <Roof background={colors.roof} />
      <RoofShadow />
      <ThirdFloor background={colors.building}>
        <TallWindow background={colors.window} />
        <TallWindow background={colors.window} />
        <TallWindow background={colors.window} />
        <ThirdFloorRailing background={colors.roof} />
        <ThirdFloorRailingShadow />
      </ThirdFloor>
      <SecondFloor background={colors.building}>
        <Window background={colors.window} />
        <Window background={colors.window} />
        <Window background={colors.window} />
        <SecondFloorRailing background={colors.roof} />
        <SecondFloorRailingShadow />
      </SecondFloor>
      <FirstFloor background={colors.building}>
        <UpperLevel>
          <Window background={colors.window} />
          <Window background={colors.window} />
          <Window background={colors.window} />
        </UpperLevel>
        <LowerLevel>
          <Window background={colors.window} />
          <Door
            background={colors.door}
            doorFrame={colors.doorFrame}
            doorknob={colors.doorknob}
          />
          <Window background={colors.window} />
        </LowerLevel>
      </FirstFloor>
      <div style={groundShadowStyle}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 123px;
  position: relative;
  margin-left: 15px;
  flex-shrink: 0;
`;
const Roof = styled.div<{ background: string }>`
  width: 120px;
  height: 5px;
  background: ${({ background }) => background};
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
const ThirdFloor = styled.div<{ background: string }>`
  position: relative;
  background: ${({ background }) => background};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 110px;
  height: 55px;
  margin-left: 6px;
`;
const SecondFloor = styled.div<{ background: string }>`
  position: relative;
  background: ${({ background }) => background};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 55px;
`;
const FirstFloor = styled.div<{ background: string }>`
  background: ${({ background }) => background};
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
const BaseWindow = styled.div<{ background: string }>`
  position: relative;
  width: 22px;
  height: 30px;
  background: ${({ background }) => background};
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
const ThirdFloorRailing = styled.div<{ background: string }>`
  width: 135px;
  height: 5px;
  position: absolute;
  background: ${({ background }) => background};
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
const SecondFloorRailing = styled.div<{ background: string }>`
  width: 135px;
  width: 135px;
  height: 5px;
  position: absolute;
  background: ${({ background }) => background};
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
const TallWindow = styled(BaseWindow)`
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
const Door = styled.div<{
  background: string;
  doorFrame: string;
  doorknob: string;
}>`
  position: relative;
  width: 29px;
  height: 43px;
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
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    bottom: 18px;
    right: 6px;
    background: ${({ doorknob }) => doorknob};
  }
`;

export default School;
