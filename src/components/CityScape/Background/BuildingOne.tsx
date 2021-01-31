import { FC } from 'react';
import styled from 'styled-components';
import { TimeOfDay } from '../../../enums';

const BuildingOne: FC<{ background: string; timeOfDay: TimeOfDay }> = ({
  background,
  timeOfDay,
}) => {
  return (
    <Building background={background}>
      <Antennae background={background} timeOfDay={timeOfDay} />
    </Building>
  );
};

export const Building = styled.div<{ background: string }>`
  position: absolute;
  left: 10px;
  bottom: 0;
  height: 270px;
  width: 180px;
  background: ${({ background }) => background};
  &::before {
    content: '';
    position: absolute;
    background: ${({ background }) => background};
  }

  &::before {
    top: -19px;
    height: 20px;
    width: 100%;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
`;
export const Antennae = styled.div<{
  background: string;
  timeOfDay: TimeOfDay;
}>`
  position: absolute;
  background: ${({ background }) => background};
  width: 3px;
  height: 60px;
  top: -60px;
  left: 30px;
  ${({ timeOfDay }) =>
    timeOfDay !== TimeOfDay.Day &&
    `
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -4px;
    width: 12px;
    height: 12px;
    animation: pulse 5s ease-in infinite;
    @keyframes pulse {
      from,
      to {
        background: radial-gradient(
          circle closest-side,
          #fcfadb,
          #cdc66f 54%,
          rgba(11, 18, 29, 0)
        );
      }

      50% {
        transform: scale(1.3);
        background: radial-gradient(
          circle closest-side,
          #fcfadb,
          #cdc66f 54%,
          rgba(11, 18, 29, 0)
        );
      }
    }
  }

`}
`;

export default BuildingOne;
