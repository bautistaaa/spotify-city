import styled from 'styled-components';

const HintArrow = () => {
  return (
    <Arrow>
      <ArrowLeftInner />
      <ArrowRightInner />
      <Inner>
        <LeftInner />
        <RightInner />
      </Inner>
    </Arrow>
  );
};

const Inner = styled.div`
  position: absolute;
  width: 2px;
  height: 29px;
  background-color: #fdfc96;
  border-radius: 20px;
  left: 2px;
  top: 2px;
`;
const LeftInner = styled.div`
  border-radius: 20px;
  position: absolute;
  bottom: -2px;
  height: 12px;
  width: 2px;
  right: -4px;
  transform: rotate(45deg);
  background-color: #fdfc96;
`;
const RightInner = styled.div`
  border-radius: 20px;
  position: absolute;
  bottom: -2px;
  height: 12px;
  width: 2px;
  left: -4px;
  transform: rotate(-45deg);
  background-color: #fdfc96;
`;

const Arrow = styled.div`
  position: relative;
  height: 30px;
  width: 6px;
  background-color: #ff8001;
  border-radius: 20px;
  animation: hover 2s infinite, goaway 10s forwards;
  @keyframes hover {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes goaway {
    0%,
    50% {
      opacity: 1;
    }

    60%,
    100% {
      opacity: 0;
    }
  }
`;
const ArrowLeftInner = styled.div`
  border-radius: 20px;
  position: absolute;
  bottom: -5px;
  height: 15px;
  width: 6px;
  background-color: #ff8001;
  right: -4px;
  transform: rotate(45deg);
`;
const ArrowRightInner = styled.div`
  border-radius: 20px;
  position: absolute;
  bottom: -5px;
  height: 15px;
  width: 6px;
  background-color: #ff8001;
  left: -4px;
  transform: rotate(-45deg);
`;

export default HintArrow;
