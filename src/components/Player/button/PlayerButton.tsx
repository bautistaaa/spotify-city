import { FC } from 'react';
import styled from 'styled-components/macro';

const PlayerButton: FC<{ onClick: () => void }> = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  border: 1px solid black;
  cursor: pointer;
`;

export default PlayerButton;
