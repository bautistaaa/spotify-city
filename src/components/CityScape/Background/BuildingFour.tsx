import { FC } from 'react';
import styled from 'styled-components';

const BuildingFour: FC<{ background: string }> = ({ background }) => {
  return <Wrapper background={background} />;
};

const Wrapper = styled.div<{ background: string }>`
  position: absolute;
  left: 570px;
  bottom: 0;
  height: 420px;
  width: 120px;
  background: ${({ background }) => background};
`;

export default BuildingFour;
