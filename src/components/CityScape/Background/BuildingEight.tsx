import { FC } from 'react';
import styled from 'styled-components/macro';

const BuildingEight: FC<{ background: string }> = ({ background }) => {
  return <Wrapper background={background} />;
};

const Wrapper = styled.div<{ background: string }>`
  position: absolute;
  bottom: 0;
  height: 420px;
  width: 120px;
  background: ${({ background }) => background};
  left: 1320px;
  &::after,
  &::before {
    background: ${({ background }) => background};
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
