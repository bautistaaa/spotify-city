import { FC } from 'react';
import styled from 'styled-components/macro';

const Bird: FC<{ background: string; className?: string }> = ({
  background,
  className,
}) => {
  return (
    <Wrapper background={background} className={className}>
      <Head background={background} />
      <Wing background={background} />
      <Tail background={background} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ background: string }>`
  position: absolute;
  width: 8px;
  height: 4px;
  background: ${({ background }) => background};
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const Tail = styled.div<{ background: string }>`
  position: absolute;
  left: 7px;
  width: 4px;
  height: 2px;
  background: ${({ background }) => background};
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
const Head = styled.div<{ background: string }>`
  position: absolute;
  top: -1px;
  left: -1px;
  width: 3px;
  height: 3px;
  background: ${({ background }) => background};
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
const Wing = styled.div<{ background: string }>`
  position: absolute;
  top: 2px;
  left: 1px;
  width: 6px;
  height: 2px;
  background: ${({ background }) => background};
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
