import styled, { keyframes } from 'styled-components';
import getRandomIntFromInterval from '../utils/getRandomIntFromInterval';

export enum PhoneDistance {
  Far = 0,
  Close = 1,
  Closest = 2,
}
const PHONE_BOTTOM_BY_DISTANCE: { [K in PhoneDistance]: [number, number] } = {
  [PhoneDistance.Far]: [68, 75],
  [PhoneDistance.Close]: [40, 60],
  [PhoneDistance.Closest]: [15, 30],
};
const PHONE_SCALE_BY_DISTANCE: { [K in PhoneDistance]: [number, number] } = {
  [PhoneDistance.Far]: [0.2, 0.4],
  [PhoneDistance.Close]: [0.6, 0.9],
  [PhoneDistance.Closest]: [1, 1.3],
};
const generateRandomFloat = (min: number, max: number) => {
  return Math.round(10 * (Math.random() * (max - min) + min)) / 10;
};
const makeItPhony = (amount: number, distance: PhoneDistance) => {
  let phones = [];
  const bottomRanges = PHONE_BOTTOM_BY_DISTANCE[distance];
  const scales = PHONE_SCALE_BY_DISTANCE[distance];
  for (let i = 0; i < amount; i++) {
    const bottom = getRandomIntFromInterval(...bottomRanges);
    const left = getRandomIntFromInterval(0, 100);
    const duration = getRandomIntFromInterval(3, 6);
    const scale = generateRandomFloat(...scales);

    phones.push(
      <Phone
        bottom={bottom}
        left={left}
        scale={scale}
        duration={duration}
        key={i}
      />
    );
  }

  return phones;
};

const Phone = styled.div<{
  left: number;
  bottom: number;
  scale: number;
  duration: number;
}>`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  bottom: ${({ bottom }) => `${bottom}%`};
  height: 70px;
  width: 40px;
  background: #aca3e2;
  border-radius: 2px;
  //transform: ${({ scale }) => `scale(${scale}) translateX(10px)`};
  box-shadow: 3px 0px 190px 80px rgba(153, 142, 210, 1);
  animation: ${(props) => sway(props.scale)} ${(props) => `${props.duration}s`}
    infinite ease-in-out;
  &::before {
    content: '';
    position: absolute;
    background: #ffffff;
    width: 94%;
    height: 84%;
    top: 4px;
    left: 1px;
  }
`;

const sway = (scale: number) => keyframes`
    from,
    to {
      transform: scale(${scale}) translateX(-10px) translateY(-3px);
    }
    50% {
      transform: scale(${scale}) translateX(10px) translateY(3px);
    }
`;

export default makeItPhony;
