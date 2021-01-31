import { FC } from 'react';
import styled from 'styled-components';
import { TimeOfDay } from '../../../enums';
import { Antennae as BaseAntennae } from './BuildingOne';

const BuildingFive: FC<{ background: string; timeOfDay: TimeOfDay }> = ({
  background,
  timeOfDay,
}) => {
  return (
    <Wrapper background={background}>
      <Terrace background={background}>
        <Antennae background={background} timeOfDay={timeOfDay} />
      </Terrace>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  position: absolute;
  left: 750px;
  bottom: 0;
  height: 320px;
  width: 120px;
`;
const Terrace = styled.div<{ background: string }>`
  position: absolute;
  background: ${({ background }) => background};
  top: -40px;
  left: 10%;
  height: 40px;
  width: 96px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ background }) => background};
  }
  &::before {
    top: -30px;
    left: 24px;
    height: 30px;
    width: 48px;
  }
`;
const Antennae = styled(BaseAntennae)`
  height: 70px;
  top: -70px;
  left: 46px;
`;

export default BuildingFive;
