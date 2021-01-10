import { FC } from 'react';
import styled from 'styled-components/macro';

const Bench: FC<{ className?: string }> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Back>
        <Spine />
        <Spine />
      </Back>
      <Seat />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 48px;
  height: 21px;
  z-index: 10;
`;
const Back = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 8px;
  margin-bottom: 2px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 3px;
    height: 10px;
    background: black;
  }

  &::before {
    left: 30%;
  }
  &::after {
    right: 30%;
  }
`;
const Spine = styled.div`
  width: 100%;
  height: 3px;
  background: #1a0303;
`;
const Seat = styled.div`
  height: 4px;
  width: 100%;
  background: black;
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 3px;
    height: 10px;
    background: black;
  }

  &::before {
    left: 30%;
  }
  &::after {
    right: 30%;
  }
`;

export default Bench;
