import styled, { keyframes } from 'styled-components';
import { ColorInfo } from '../constants/colors';
import getRandomIntFromInterval from '../utils/getRandomIntFromInterval';

export enum PhoneDistance {
  Far = 0,
  Close = 1,
  Closest = 2,
}
const PHONE_BOTTOM_BY_DISTANCE: { [K in PhoneDistance]: [number, number] } = {
  [PhoneDistance.Far]: [68, 75],
  [PhoneDistance.Close]: [40, 60],
  [PhoneDistance.Closest]: [10, 20],
};
const PHONE_SCALE_BY_DISTANCE: { [K in PhoneDistance]: [number, number] } = {
  [PhoneDistance.Far]: [0.2, 0.4],
  [PhoneDistance.Close]: [0.6, 0.9],
  [PhoneDistance.Closest]: [0.6, 0.9],
  //[PhoneDistance.Closest]: [1, 1.3],
};
const generateRandomFloat = (min: number, max: number) => {
  return Math.round(10 * (Math.random() * (max - min) + min)) / 10;
};
const makeItPhony = (
  amount: number,
  distance: PhoneDistance,
  colorInfo: ColorInfo,
  duration: number
) => {
  let phones = [];
  const bottomRanges = PHONE_BOTTOM_BY_DISTANCE[distance];
  const scales = PHONE_SCALE_BY_DISTANCE[distance];
  const [phoneColor, glow] = colorInfo;

  for (let i = 0; i < amount; i++) {
    const bottom = getRandomIntFromInterval(...bottomRanges);
    const left = getRandomIntFromInterval(0, 100);
    const scale = generateRandomFloat(...scales);

    phones.push(
      <Phone
        bottom={bottom}
        left={left}
        scale={scale}
        duration={duration}
        phoneColor={phoneColor}
        glow={glow}
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
  phoneColor: string;
  glow: string;
}>`
  position: absolute;
  left: ${({ left }) => `${left}%`};
  bottom: ${({ bottom }) => `${bottom}%`};
  height: 70px;
  width: 40px;
  background: ${({ phoneColor }) => phoneColor};
  border-radius: 2px;
  box-shadow: 3px 0px 190px 20px ${({ glow }) => glow};
  transform: scale(${({ scale }) => scale});
  animation: ${(props) => sway(props.scale)} ${(props) => `${props.duration}s`}
    infinite;
  z-index: 100;
  opacity: 0.7;
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
