import styled from 'styled-components/macro';

const Crane = () => {
  return (
    <Wrapper>
      <Wire />
      <WireTwo />
      <WireThree />
      <Arm />
      <Base />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: -90px;
  width: 10px;
  height: 80px;
  background: #ad3c50;
  left: 30px;
`;
const Arm = styled.div`
  position: absolute;
  top: -20px;
  left: 20px;
  width: 7px;
  height: 85px;
  background: #ad3c50;
  animation: rotateArm 8s infinite;

  @keyframes rotateArm {
    from,
    to {
      transform: rotateY(0deg) rotateZ(84deg);
    }

    50% {
      transform: rotateY(50deg) rotateZ(84deg);
    }
  }
  &::before {
    content: '';
    position: absolute;
    background: #ad3c50;
    height: 8px;
    width: 15px;
    bottom: 5px;
    left: -4px;
    z-index: -1;
  }
`;
const Wire = styled.div`
  position: absolute;
  left: 9px;
  top: 10px;
  width: 1px;
  height: 45px;
  transform-origin: 0 0;
  transform: rotateY(180deg) rotateZ(83deg);
  background: #8b2122;
  z-index: -1;
  animation: rotateWire 8s infinite;

  @keyframes rotateWire {
    from,
    to {
      transform: rotateY(180deg) rotateZ(83deg);
    }

    50% {
      transform: rotateY(120deg) rotateZ(80deg);
    }
  }
`;
const WireTwo = styled.div`
  position: absolute;
  left: 5px;
  top: 6px;
  width: 1px;
  height: 25px;
  transform-origin: right 0;
  transform: rotateY(0deg) rotateZ(50deg);
  background: #8b2122;
  z-index: -1;
  animation: rotateWireTwo 8s infinite;

  @keyframes rotateWireTwo {
    from,
    to {
      transform: rotateY(0deg) rotateZ(50deg);
    }

    50% {
      transform: rotateY(80deg) rotateZ(50deg);
    }
  }
`;
const WireThree = styled.div`
  position: absolute;
  right: -49px;
  top: 19px;
  width: 1px;
  height: 35px;
  transform-origin: 0 0;
  background: #8b2122;
  z-index: -1;
  animation: rotateWireThree 8s infinite;
  &::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #8b2122;
    bottom: 0;
    left: -3px;
  }

  @keyframes rotateWireThree {
    from to {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-20px);
    }
  }
`;
const Base = styled.div`
  background: #8b2122;
  position: absolute;
  bottom: 0;
  left: -10px;
  width: 30px;
  height: 10px;
`;

export default Crane;
