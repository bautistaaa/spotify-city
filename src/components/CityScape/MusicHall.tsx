import { FC } from 'react';
import styled from 'styled-components/macro';

const MusicHall: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Wrapper onClick={() => onClick()}>
      <Marquee>
        <div>NORVA</div>
      </Marquee>
      <BottomRow>
        <Barrier>
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
        </Barrier>
        <Entrance />
        <Barrier>
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
          <Spine />
        </Barrier>
      </BottomRow>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height: 200px;
  width: 300px;
  background: #3e3e3e;
  margin-left: 10px;
  flex-shrink: 0;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #5d3d47;
  }

  &::before {
    height: 20px;
    top: -20px;
    width: 50px;
    left: 0;
  }
  &::after {
    width: 40px;
    height: 10px;
    top: -10px;
    left: 50px;
  }
`;
const Entrance = styled.div`
  height: 70px;
  width: 85px;
  background: #252525;
  border: 10px solid gray;
  border-bottom: none;
`;
const BottomRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-grow: 1;
`;
const Barrier = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #b9b9b9;
  height: 34px;
  width: 106px;
  border-radius: 2px;
`;
const Spine = styled.div`
  height: 100%;
  width: 2px;
  background: #b9b9b9;
`;
const Marquee = styled.div`
  margin-top: 50px;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 7.7px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 220px;
  height: 40px;
  color: #fff;
  animation: neon 1.5s ease-in-out infinite alternate;
  @keyframes neon {
    from {
    text-shadow: 0 0 10px #ddd, 0 0 20px #ddd, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #ddd, 0 0 15px #ddd, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;
  }
}
}
`;

export default MusicHall;
