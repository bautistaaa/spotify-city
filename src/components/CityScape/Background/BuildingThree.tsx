import { FC } from 'react';
import styled from 'styled-components';

const BuildingThree: FC<{ background: string }> = ({ background }) => {
  return <Wrapper background={background} />;
};

const Wrapper = styled.div<{ background: string }>`
  position: absolute;
  left: 370px;
  bottom: 0;
  height: 320px;
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
  &::after {
    top: -20px;
    left: 10%;
    height: 10px;
    width: 40%;
  }
`;

export default BuildingThree;
