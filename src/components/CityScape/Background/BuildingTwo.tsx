import React from 'react';
import styled from 'styled-components';
import Crane from '../Crane';

const BuildingTwo = () => {
  return (
    <Wrapper>
      <Crane />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  left: 220px;
  bottom: 0;
  height: 230px;
  width: 120px;
  background: #ad3c50;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #ad3c50;
  }

  &::before {
    top: -10px;
    left: 10%;
    height: 10px;
    width: 80%;
  }
`;
export default BuildingTwo;
