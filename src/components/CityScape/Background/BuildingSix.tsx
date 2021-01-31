import {FC} from 'react';
import styled from 'styled-components';
import { Building } from './BuildingOne';

const BuildingSix: FC<{ background: string }> = ({ background }) => {
  return <Wrapper background={background} />;
};

const Wrapper = styled(Building)`
  left: 900px;
  height: 500px;
  transform: scaleX(-1);
`;

export default BuildingSix;
