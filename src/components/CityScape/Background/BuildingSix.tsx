import styled from 'styled-components';
import { Building } from './BuildingOne';

const BuildingSix = () => {
  return <Wrapper />;
};

const Wrapper = styled(Building)`
  left: 900px;
  height: 500px;
  transform: scaleX(-1);
`;

export default BuildingSix;
