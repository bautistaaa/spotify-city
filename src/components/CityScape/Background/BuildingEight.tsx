import styled from 'styled-components/macro';
import BuildingFour from './BuildingFour';

const BuildingEight = () => {
  return <Wrapper />;
};

const Wrapper = styled(BuildingFour)`
  left: 1320px;
  &::after,
  &::before {
    background: #ad3c50;
    content: '';
    position: absolute;
    top: -15px;
  }
  &::before {
    left: 0;
    height: 15px;
    width: 30px;
  }
  &::after {
    right: 0;
  }
`;

export default BuildingEight;
