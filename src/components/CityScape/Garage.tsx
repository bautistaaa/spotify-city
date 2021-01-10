import styled from 'styled-components/macro';

const Garage = () => {
  return (
    <Wrapper>
      <Billboard>
        <Overlay />
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Ariana_Grande_My_Everything_2014_album_artwork.png/220px-Ariana_Grande_My_Everything_2014_album_artwork.png"
          alt=""
        />
      </Billboard>
      <Awning />
      <AwningShadow />
      <Door />
      <Light />
      <Sign />
      <GarageDoor>
        <GarageDoorWindownFrame />
      </GarageDoor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 175px;
  height: 90px;
  position: relative;
  margin-left: 10px;
  background: rgb(192, 188, 173);
  flex-shrink: 0;
`;
const Light = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 0;
  left: 7px;
  clip-path: polygon(34% 0, 71% 0, 98% 100%, 3% 100%);
  background: linear-gradient(
    180deg,
    rgb(235 235 235 / 90%) 0%,
    rgb(208 208 205 / 20%) 100%
  );
  height: 45px;
  width: 45px;
`;
const Awning = styled.div`
  position: absolute;
  width: 45px;
  height: 8px;
  background: #939292;
  bottom: 45px;
  left: 7px;
  z-index: 5;
  &::before {
    content: '';
    position: absolute;
    width: 29px;
    top: -9px;
    border-bottom: 9px solid #7f7d7d;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
`;
const AwningShadow = styled.div`
  position: absolute;
  width: 39px;
  height: 8px;
  background: rgb(118 118 118 / 45%);
  bottom: 38px;
  left: 10px;
  z-index: 4;
`;
const Door = styled.div`
  position: absolute;
  width: 29px;
  height: 43px;
  bottom: 0;
  left: 15px;
  background: rgb(32, 32, 32);
  &::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 40px;
    bottom: 0;
    left: 3px;
    background: rgb(178, 178, 178);
  }
  &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    bottom: 18px;
    border-radius: 50%;
    right: 6px;
    background: gray;
  }
`;
const GarageDoor = styled.div`
  position: absolute;
  width: 100px;
  height: 62px;
  bottom: 0;
  right: 15px;
  background: rgb(207 207 207);
  border: 2px solid gray;
  border-bottom: none;
  &::after {
    content: '';
    position: absolute;
    top: 16px;
    width: 100%;
    height: 25px;
    background: #7e97a7;
    border: 1px solid grey;
    border-left: none;
    border-right: none;
  }
`;
const GarageDoorWindownFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: grey;
  z-index: 5;
`;
const Sign = styled.div`
  position: absolute;
  top: 7px;
  width: 83%;
  height: 15px;
  background: grey;
  left: 15px;
  &::after {
    content: '';
    position: absolute;
    background: #dddbdb;
    top: 4px;
    left: 5px;
    width: 93%;
    height: 7px;
  }
`;
const Billboard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -96px;
  left: 20px;
  height: 80px;
  width: 125px;
  padding: 2px;
  background: #dddbdb;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    height: 16px;
    width: 3px;
    background: #8c5618;
  }

  &::before {
    left: 29%;
  }
  &::after {
    right: 29%;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
`;

export default Garage;
