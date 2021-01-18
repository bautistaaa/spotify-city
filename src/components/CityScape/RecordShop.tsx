import { FC } from 'react';
import styled from 'styled-components/macro';

const RecordShop: FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <Roof />
      <RoofShadow />
      <Awning>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Awning>
      <AwningShadow />
      <WindowBorder />
      <Window />
      <Door />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 175px;
  height: 90px;
  position: relative;
  background: rgb(210, 210, 210);
  margin-left: 15px;
  flex-shrink: 0;
`;
const Roof = styled.div`
  position: absolute;
  background: #9a9a9a;
  width: 185px;
  height: 12px;
  top: -2px;
  left: -5px;
  z-index: 4;
`;
const RoofShadow = styled.div`
  position: absolute;
  width: 175px;
  height: 12px;
  background: rgb(154 154 154 / 56%);
  top: 5px;
  bottom: 37px;
  left: 0px;
  z-index: 3;
`;
const Awning = styled.div`
  position: absolute;
  top: 20px;
  width: 130px;
  height: 30px;
  left: 29px;
  border: 2px solid #505050;
  background: #ececec;
  z-index: 4;
  & > div:nth-child(odd) {
    display: inline-block;
    width: 10%;
    height: 100%;
    background: #cb3232;
  }
  & > div:nth-child(even) {
    display: inline-block;
    width: 10%;
    height: 100%;
  }
`;
const AwningShadow = styled.div`
  position: absolute;
  width: 123px;
  height: 10px;
  left: 31px;
  top: 47px;
  background: rgb(117 116 116 / 60%);
  z-index: 3;
`;
const WindowBorder = styled.div`
  position: absolute;
  width: 90px;
  height: 36px;
  left: 32px;
  top: 47px;
  border: 2px solid #505050;
`;
const Window = styled.div`
  position: absolute;
  width: 84px;
  height: 33px;
  left: 35px;
  top: 47px;
  border: 2px solid #505050;
  background: #9598b1;
`;
const Door = styled.div`
  position: absolute;
  right: 23px;
  height: 42px;
  width: 28px;
  border: 2px solid #505050;
  bottom: 0;
  border-bottom: none;
  background: #eaeaea;
  &::after {
    content: '';
    position: absolute;
    left: 2px;
    bottom: 16px;
    height: 3px;
    width: 3px;
    border-radius: 3px;
    background: #505050;
  }
`;

export default RecordShop;
