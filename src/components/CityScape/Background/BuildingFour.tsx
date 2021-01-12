import { FC } from 'react';
import styled from 'styled-components';

const BuildingFour: FC<{ className?: string }> = ({ className }) => {
  return <Wrapper className={className} />;
};

const Wrapper = styled.div`
  position: absolute;
  left: 570px;
  bottom: 0;
  height: 420px;
  width: 120px;
  background: #ad3c50;
`;

export default BuildingFour;
