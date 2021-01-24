import styled from 'styled-components/macro';

const SignBuilding = () => {
  return (
    <Wrapper>
      <Roof />
      <Top>
        <Sign>
          <div>H</div>
          <div>O</div>
          <div>T</div>
          <div>E</div>
          <div>L</div>
        </Sign>
        <Row>
          <Balcony>
            <Rail />
            <Rail />
            <Rail />
            <Rail />
          </Balcony>
          <WindowFrame>
            <WindowGlass>
              <WindowSpine />
              <WindowSpine />
            </WindowGlass>
          </WindowFrame>
          <WindowFrame>
            <WindowGlass>
              <WindowSpine />
              <WindowSpine />
            </WindowGlass>
          </WindowFrame>
        </Row>
        <Row>
          <Balcony hasLadder>
            <Rail />
            <Rail />
            <Rail />
            <Rail />
          </Balcony>
          <WindowFrame>
            <WindowGlass>
              <WindowSpine />
              <WindowSpine />
            </WindowGlass>
          </WindowFrame>
          <WindowFrame>
            <WindowGlass>
              <WindowSpine />
              <WindowSpine />
            </WindowGlass>
          </WindowFrame>
        </Row>
        <Row>
          <Balcony hasLadder>
            <Rail />
            <Rail />
            <Rail />
            <Rail />
          </Balcony>
          <WindowFrame>
            <WindowGlass>
              <WindowSpine />
              <WindowSpine />
            </WindowGlass>
          </WindowFrame>
          <WindowFrame>
            <WindowGlass>
              <WindowSpine />
              <WindowSpine />
            </WindowGlass>
          </WindowFrame>
        </Row>
        <Row>
          <Balcony hasLadder>
            <Rail />
            <Rail />
            <Rail />
            <Rail />
          </Balcony>
          <WindowFrame>
            <WindowGlass>
              <WindowSpine />
              <WindowSpine />
            </WindowGlass>
          </WindowFrame>
          <WindowFrame>
            <WindowGlass>
              <WindowSpine />
              <WindowSpine />
            </WindowGlass>
          </WindowFrame>
        </Row>
      </Top>
      <Bottom>
        <Trim />
        <Door />
        <Garage>
          <GarageDoor />
        </Garage>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 15px;
  flex-shrink: 0;
`;
const Roof = styled.div`
  width: 128px;
  height: 20px;
  background: #1a0303;
  position: absolute;
  left: -4px;
  top: -15px;
  border-radius: 3px;
}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  width: 120px;
  padding-top: 15px;
  background: #d29da0;
`;
const Bottom = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background: #f5cbc4;
`;
const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 15px;
`;
const Balcony = styled.div<{ hasLadder?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  width: 48px;
  height: 21px;
  border: solid #1a0303;
  border-width: 2px 2px 5px 2px;
  z-index: 10;
  left: 5px;
  bottom: -3px;
  ${({ hasLadder }) =>
    hasLadder &&
    `
      &::before {
        content: '';
        position: absolute;
        right: 4px;
        bottom: 0;
        height: 62px;
        width: 2px;
        background: #1a0303;
        transform-origin: bottom right;
        transform: rotate(320deg);
      }
`}
`;
const Rail = styled.div`
  width: 100%;
  height: 1px;
  background: #1a0303;
`;
const WindowFrame = styled.div`
  position: relative;
  background: #f0d1cc;
  height: 36px;
  width: 26px;
  padding: 3px;
`;
const WindowGlass = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: #1a0303;
`;
const WindowSpine = styled.div`
  width: 100%;
  height: 2px;
  background: #f0d1cc;
  margin-bottom: 4px;
`;
const Door = styled.div`
  position: absolute;
  width: 29px;
  height: 43px;
  bottom: 0;
  left: 10px;
  background: #df888c;
  &::before {
    content: '';
    position: absolute;
    width: 23px;
    height: 40px;
    bottom: 0;
    left: 3px;
    background: #1a0303;
  }
`;
const Garage = styled.div`
  position: absolute;
  width: 60px;
  height: 43px;
  bottom: 0;
  right: 5px;
  background: #df888c;
  padding: 3px 3px 0;
`;
const GarageDoor = styled.div`
  width: 100%;
  height: 100%;
  background: #1a0303;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #df888c;
  }
  &::before {
    left: 48%;
    height: 100%;
    width: 2px;
  }
  &::after {
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
  }
`;
const Trim = styled.div`
  height: 3px;
  width: 100%;
  position: absolute;
  background: #5c5666;
  top: 0;
`;
const Sign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: -30px;
  height: 135px;
  width: 25px;
  background: #3f3939;
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  color: white;
  font-weight: 500;
  &::before,
  &::after {
    content: '';
    position: absolute;
    right: -7px;
    width: 5px;
    height: 3px;
    background: #4c3b3b;
  }
  &::before {
    top: 15px;
  }
  &::after {
    bottom: 15px;
  }
  > div {
    text-shadow: 0px 2px 7px, 0px 0px 4px, -2px -1px 1em #ff4444,
      0 0 0.5em #ff4444, 0 0 0.1em #ff4444;
  }
  > div:nth-child(2) {
    animation: blink 2s linear infinite 7s;
  }
  > div:last-child {
    animation: blink linear infinite 3s;
  }
  @keyframes blink {
    78% {
      color: inherit;
    }
    79% {
      color: #333;
    }
    81% {
      color: inherit;
    }
    82% {
      color: #333;
    }
    83% {
      color: inherit;
    }
    92% {
      color: #333;
    }
    92.5% {
      color: inherit;
    }
  }
`;
export default SignBuilding;
