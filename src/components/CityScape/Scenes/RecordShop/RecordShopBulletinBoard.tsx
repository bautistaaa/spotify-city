import { FC } from 'react';
import styled from 'styled-components';

interface Position {
  bottom: number;
  right: number;
  left: number;
  top: number;
}

const RecordShopBulletinBoard: FC = () => {
  return (
    <Wrapper>
      <PaperContainer position={{ top: 20, left: 20 }}>
        <Flyer />
        <PaperLeftShadow />
        <PaperRightShadow />
      </PaperContainer>
      <PaperContainer position={{ top: 0, right: 20 }}>
        <PostIt />
        <PaperLeftShadow />
        <PaperRightShadow />
      </PaperContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: #b88f5a;
  height: 715px;
  width: 100%;
  max-width: 900px;
  overflow: hidden;
  border: 15px solid #d87d28;
`;
const PaperContainer = styled.div<{ position: Partial<Position> }>`
  position: absolute;
  top: ${({ position: { top } }) => (top !== undefined ? `${top}px` : '')};
  right: ${({ position: { right } }) =>
    right !== undefined ? `${right}px` : ''};
  left: ${({ position: { left } }) => (left !== undefined ? `${left}px` : '')};
  bottom: ${({ position: { bottom } }) =>
    bottom !== undefined ? `${bottom}px` : ''};
`;
const Paper = styled.div`
  position: relative;
  background: #fff;
  border-radius: 2px;
  z-index: 2;
`;
const Flyer = styled(Paper)`
  width: 240px;
  height: 270px;
`;
const PostIt = styled(Paper)`
  width: 100px;
  height: 100px;
`;
const PaperLeftShadow = styled.div`
  position: absolute;
  bottom: 10px;
  width: 40%;
  height: 10px;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease-in-out;
  left: 15px;
  transform: skew(-5deg) rotate(-5deg);
  box-shadow: 0px 3px 11px 7px rgb(0 0 0 / 51%);
  &:hover {
    left: 5px;
  }
`;
const PaperRightShadow = styled.div`
  position: absolute;
  bottom: 10px;
  width: 40%;
  height: 10px;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease-in-out;
  right: 15px;
  transform: skew(5deg) rotate(5deg);
  box-shadow: 0px 3px 11px 7px rgb(0 0 0 / 51%);
  &:hover {
    right: 5px;
  }
`;

export default RecordShopBulletinBoard;
