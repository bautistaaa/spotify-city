import React, { FC } from 'react';
import styled from 'styled-components/macro';
import hover from '../../mixins/hover';

const TheArrow: FC<{ environmentColor: string }> = ({ environmentColor }) => {
  return (
    <Wrapper>
      <Arrow environmentColor={environmentColor}>
        <ArrowHead />
      </Arrow>
      <ArrowInner>
        <ArrowHeadInner />
      </ArrowInner>
      <MaskingArrow environmentColor={environmentColor} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  ${hover}
`;
const Arrow = styled.div<{ environmentColor: string }>`
  position: relative;
  height: 60px;
  width: 70px;
  background-color: #ff8000;
  border-radius: 3px;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 0 70px 12px 0;
    border-color: ${({ environmentColor }) =>
      `transparent ${environmentColor} transparent transparent`};
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 70px;
    border-color: ${({ environmentColor }) =>
      `transparent transparent ${environmentColor} transparent`};
  }
`;
const ArrowHead = styled.div`
  position: absolute;
  right: -49px;
  top: -12px;
  background-color: #ff8000;
  text-align: left;
  margin: 1.2em;
  transform: rotate(-90deg) skewX(-30deg) scale(1, 0.866);

  &::after,
  &::before {
    content: '';
    position: absolute;
    background-color: inherit;
  }

  &,
  &::after,
  &::before {
    width: 30px;
    height: 30px;
    border-top-right-radius: 15%;
  }

  &::after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
  &::before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
`;
const ArrowInner = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: 50px;
  width: 70px;
  background-color: #fdfd96;
  border-radius: 3px;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 0 70px 12px 0;
    border-color: transparent #ff8000 transparent transparent;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 70px;
    border-color: transparent transparent #ff8000 transparent;
  }
`;
const ArrowHeadInner = styled.div`
  position: absolute;
  background-color: #fdfd96;
  right: -42px;
  top: -13px;
  text-align: left;
  margin: 1.2em;
  transform: rotate(-90deg) skewX(-30deg) scale(1, 0.866);

  &::after,
  &::before {
    content: '';
    position: absolute;
    background-color: inherit;
  }

  &,
  &::after,
  &::before {
    width: 25px;
    height: 25px;
    border-top-right-radius: 10%;
  }

  &::after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
  &::before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
`;
const MaskingArrow = styled.div<{ environmentColor: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
  width: 72px;
  background-color: transparent;
  border-radius: 3px;
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 0 72px 12px 0;
    border-color: ${({ environmentColor }) =>
      `transparent ${environmentColor} transparent transparent`};
  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 12px 72px;
    border-color: ${({ environmentColor }) =>
      `transparent transparent ${environmentColor} transparent`};
  }
`;

export default TheArrow;
