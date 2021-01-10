import styled from 'styled-components';

const BuildingThree = () => {
  return <Wrapper />;
};

const Wrapper = styled.div`
  position: absolute;
  left: 370px;
  bottom: 0;
  height: 320px;
  width: 120px;
  background: #ad3c50;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background: #ad3c50;
  }

  &::before {
    top: -10px;
    left: 10%;
    height: 10px;
    width: 80%;
  }
  &::after {
    top: -20px;
    left: 10%;
    height: 10px;
    width: 40%;
  }
`;

export default BuildingThree
