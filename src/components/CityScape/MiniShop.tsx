import styled from 'styled-components/macro';

const MiniShop = () => {
  return (
    <Wrapper>
      <Roof />
      <RoofShadow />
      <Billboard>
        <Overlay />
        <Video
          src="//easportsassets-a.akamaihd.net/pulse.content.easports.com/web/OnlineAssets/easports/2017/easports17-video-reel.webm"
          autoPlay
          loop
          muted
        />
      </Billboard>
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
const Vent = styled.div`
  position: absolute;
  height: 26px;
  width: 6px;
  background: #5b5b5b;
  top: -28px;
  left: 20px;
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
const Billboard = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -89px;
  left: 20px;
  height: 73px;
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
    background: #d2d2d2;
  }

  &::before {
    left: 29%;
  }
  &::after {
    right: 29%;
  }
`;
const Video = styled.video`
  width: 100% !important;
  height: auto !important;
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

export default MiniShop;
