import styled from 'styled-components/macro';

const Bird = ({ className }: { className?: string }) => {
  return (
    <Wrapper className={className}>
      <Head />
      <Wing />
      <Tail />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 8px;
  height: 4px;
  background: #ba7ea0;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const Tail = styled.div`
  position: absolute;
  left: 7px;
  width: 4px;
  height: 2px;
  background: #ba7ea0;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const Head = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 3px;
  height: 3px;
  background: #ba7ea0;
  border-radius: 50%;
  &::after {
    content: '';
    position: absolute;
    left: -1.5px;
    top: 0.7px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1px 2px 1px 0;
    border-color: transparent #ba7ea0 transparent transparent;
    transform: scale(0.7) rotate(-30deg);
  }
`;
const Wing = styled.div`
  position: absolute;
  top: 2px;
  left: 1px;
  width: 6px;
  height: 2px;
  background: #ba7ea0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transform: rotate(90deg);
  animation: flap 1s infinite;
  @keyframes flap {
    from to {
      transform: rotateY(0);
    }

    50% {
      transform: rotateY(90deg);
    }
  }
`;
export default Bird;
