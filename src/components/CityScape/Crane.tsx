import { FC } from 'react';
import styled from 'styled-components/macro';
import { TimeOfDay } from '../../enums';

const COLORS: { [K in TimeOfDay]: [primary: string, secondary: string] } = {
  [TimeOfDay.Day]: ['#7088b9', '#a0c8e3'],
  [TimeOfDay.Twilight]: ['#9d3e3f', '#b45669'],
  [TimeOfDay.Night]: ['#374971', '#3b5589'],
};

const Crane: FC<{ timeOfDay: TimeOfDay }> = ({ timeOfDay }) => {
  const [baseColor, armColor] = COLORS[timeOfDay];

  return (
    <Wrapper background={baseColor}>
      <Wire background={baseColor} />
      <WireTwo background={baseColor} />
      <WireThree background={baseColor} />
      <Arm background={armColor} />
      <Base background={armColor} />
    </Wrapper>
  );
};
const Wrapper = styled.div<{ background: string }>`
  position: absolute;
  top: -90px;
  width: 10px;
  height: 80px;
  background: ${({ background }) => background};
  left: 30px;
`;
const Arm = styled.div<{ background: string }>`
  position: absolute;
  top: -20px;
  left: 20px;
  width: 7px;
  height: 85px;
  background: ${({ background }) => background};
  animation: rotateArm 8s infinite;

  @keyframes rotateArm {
    from,
    to {
      transform: rotateY(0deg) rotateZ(84deg);
    }

    50% {
      transform: rotateY(50deg) rotateZ(84deg);
    }
  }
  &::before {
    content: '';
    position: absolute;
    background: ${({ background }) => background};
    height: 8px;
    width: 15px;
    bottom: 5px;
    left: -4px;
    z-index: -1;
  }
`;
const Wire = styled.div<{ background: string }>`
  position: absolute;
  left: 9px;
  top: 10px;
  width: 1px;
  height: 45px;
  transform-origin: 0 0;
  transform: rotateY(180deg) rotateZ(83deg);
  background: ${({ background }) => background};
  z-index: -1;
  animation: rotateWire 8s infinite;

  @keyframes rotateWire {
    from,
    to {
      transform: rotateY(180deg) rotateZ(83deg);
    }

    50% {
      transform: rotateY(120deg) rotateZ(80deg);
    }
  }
`;
const WireTwo = styled.div<{ background: string }>`
  position: absolute;
  left: 5px;
  top: 6px;
  width: 1px;
  height: 25px;
  transform-origin: right 0;
  transform: rotateY(0deg) rotateZ(50deg);
  background: ${({ background }) => background};
  z-index: -1;
  animation: rotateWireTwo 8s infinite;

  @keyframes rotateWireTwo {
    from,
    to {
      transform: rotateY(0deg) rotateZ(50deg);
    }

    50% {
      transform: rotateY(80deg) rotateZ(50deg);
    }
  }
`;
const WireThree = styled.div<{ background: string }>`
  position: absolute;
  right: -49px;
  top: 19px;
  width: 1px;
  height: 35px;
  transform-origin: 0 0;
  background: ${({ background }) => background};
  z-index: -1;
  animation: rotateWireThree 8s infinite;
  &::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ background }) => background};
    bottom: 0;
    left: -3px;
  }

  @keyframes rotateWireThree {
    from to {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-20px);
    }
  }
`;
const Base = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  position: absolute;
  bottom: 0;
  left: -10px;
  width: 30px;
  height: 10px;
`;

export default Crane;
