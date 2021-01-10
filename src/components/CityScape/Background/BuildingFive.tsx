import styled from 'styled-components';
import { Antennae as BaseAntennae } from './BuildingOne';

const BuildingFive = () => {
  return (
    <Wrapper>
      <Terrace>
        <Antennae />
      </Terrace>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 750px;
  bottom: 0;
  height: 320px;
  width: 120px;
  background: #ad3c50;
`;
const Terrace = styled.div`
  position: absolute;
  background: #ad3c50;
  top: -40px;
  left: 10%;
  height: 40px;
  width: 96px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #ad3c50;
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
