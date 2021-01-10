import styled from 'styled-components/macro';

const StreetLight = () => {
  return (
    <Wrapper>
      <Middle />
      <Base />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  left: 250px;
  bottom: 30px;
  z-index: 20;
`;
const Base = styled.div`
  width: 8px;
  height: 35px;
  background: #6f81ba;
`;
const Middle = styled.div`
  width: 4px;
  height: 60px;
  background: #a2a8bc;
`;

export default StreetLight;
