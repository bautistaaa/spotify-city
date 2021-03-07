import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';

const Slider = () => {
  const [circleX, setCircleX] = useState(0);
  const isMouseDown = useRef(false);
  const wrapperRef = useRef();
  const lineRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    const handleMouseMove = () => {};
    const handleMouseUp = () => {};
    const handleTouchMove = () => {};
    const handleTouchEnd = () => {};

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    };
  }, [wrapperRef, lineRef, circleRef]);

  return (
    <Wrapper ref={wrapperRef as any}>
      <Line ref={lineRef as any}>
        <Circle
          ref={circleRef as any}
          onPointerDown={() => (isMouseDown.current = true)}
          onPointerUp={() => (isMouseDown.current = false)}
        />
      </Line>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20px;
`;
const Line = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: black;
`;
const Circle = styled.button`
  position: absolute;
  background: red;
  border: 2px solid black;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  bottom: -6px;
`;

export default Slider;
