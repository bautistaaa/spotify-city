import {FC} from 'react';
import styled from 'styled-components/macro';

const Shop: FC = () => {
  return (
    <Wrapper>
      <Roof />
      <RoofShadow />
      <TopWindow />
      <Awning />
      <AwningShadow />
      <BottomWindow />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100px;
  height: 130px;
  position: relative;
  background: rgb(194, 110, 141);
  margin-left: 10px;
  flex-shrink: 0;
`;
const Roof = styled.div`
  position: absolute;
  background: #88405a;
  width: 110px;
  height: 12px;
  top: -2px;
  left: -5px;
  z-index: 4;
`;
const RoofShadow = styled.div`
  position: absolute;
  width: 100px;
  height: 12px;
  background: rgb(127 83 99 / 45%);
  top: 5px;
  bottom: 37px;
  left: 0px;
  z-index: 3;
`;
const TopWindow = styled.div`
  position: absolute;
    width: 70px;
    height: 50px;
    background: #9598b1;
    top: 5px;
    left: 14px;
    border: 2px solid #505050;
    z-index: 2;
}
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: #505050;
    left: 0;
    right: 0;
    bottom: 15px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 15px;
    background: #505050;
    left: 50%;
    bottom: 0;
  }
`;
const BottomWindow = styled.div`
  position: absolute;
  width: 70px;
  height: 50px;
  background: #9598b1;
  bottom: 0;
  left: 14px;
  border: 2px solid #505050;
  border-bottom: none;
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background: #505050;
    bottom: 0;
    top: 0;
    right: 30px;
  }
  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 8px;
    background: #505050;
    right: 23px;
    bottom: 15px;
  }
`;
const Awning = styled.div`
  position: absolute;
  width: 86px;
  height: 12px;
  background: #a24869;
  bottom: 45px;
  left: 7px;
  z-index: 5;
  &::before {
    content: '';
    position: absolute;
    width: 56px;
    top: -13px;
    border-bottom: 13px solid #88405a;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
  }
`;
const AwningShadow = styled.div`
  position: absolute;
  width: 80px;
  height: 12px;
  background: rgb(127 83 99 / 45%);
  bottom: 37px;
  left: 10px;
  z-index: 4;
`;

export default Shop;
