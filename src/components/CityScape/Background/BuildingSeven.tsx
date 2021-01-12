import styled from 'styled-components/macro';

const BuildingSeven = () => {
  return (
    <Wrapper>
      <Row>
        <LeftEar />
        <RightEar />
      </Row>
      <Top />
      <Arch />
      <Base />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 1130px;
  bottom: 0;
`;
const Base = styled.div`
  height: 330px;
  width: 150px;
  background: #ad3c50;
`;
const Arch = styled.div`
  width: 150px;
  height: 50px;
  border-top: 30px solid #ad3c50;
  border-left: 30px solid #ad3c50;
  border-right: 30px solid #ad3c50;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
`;
const Top = styled.div`
  position: absolute;
  top: 30px;
  height: 30px;
  width: 150px;
  background: #ad3c50;
`;
const Row = styled.div`
  display: flex;
  height: 30px;
  width: 150px;
  align-items: flex-end;
  justify-content: space-between;
`;
const BaseEar = styled.div`
  position: relative;
  width: 25px;
  height: 20px;
  background: #ad3c50;
  &::before,
  &::after {
    content: '';
    background: #ad3c50;
    position: absolute;
  }
  &::before {
    width: 17px;
    height: 18px;
    top: -15px;
    left: 4px;
  }
  &::after {
    width: 4px;
    height: 30px;
    top: -45px;
    left: 11px;
  }
`;
const RightEar = styled(BaseEar)``;
const LeftEar = styled(BaseEar)``;

export default BuildingSeven;
