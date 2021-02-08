import { FC } from 'react';
import styled from 'styled-components/macro';

const NavigationButton: FC<{
  text: string;
  onClick: () => void;
  className?: string;
}> = ({ text, onClick, className }) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 40px;
  background: #e74c3c;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  transition: color 0.3s;
  font-weight: 600;
  font-size: 17px;
  text-transform: uppercase;
  color: #fff;
  &::after {
    z-index: -2;
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #c0392b;
    content: '';
    transition: transform 0.3s;
  }
`;

export default NavigationButton;
