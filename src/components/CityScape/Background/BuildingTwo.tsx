import React, { FC } from 'react';
import styled from 'styled-components';
import { TimeOfDay } from '../../../enums';
import Crane from '../Crane';

const BuildingTwo: FC<{ background: string; timeOfDay: TimeOfDay }> = ({
  background,
  timeOfDay,
}) => {
  return (
    <Wrapper background={background}>
      <Crane timeOfDay={timeOfDay} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ background: string }>`
  position: absolute;
  left: 220px;
  bottom: 0;
  height: 230px;
  width: 120px;
  background: ${({ background }) => background};
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ background }) => background};
  }

  &::before {
    top: -10px;
    left: 10%;
    height: 10px;
    width: 80%;
  }
`;
export default BuildingTwo;
