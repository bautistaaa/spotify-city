import styled from 'styled-components/macro';

const BuildingSeven: FC<{ background: string }> = ({ background }) => {
  return (
    <Wrapper>
      <Row>
        <LeftEar background={background} />
        <RightEar background={background} />
      </Row>
      <Top background={background} />
      <Arch background={background} />
      <Base background={background} />
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
const Base = styled.div<{ background: string }>`
  height: 330px;
  width: 150px;
  background: ${({ background }) => background};
`;
const Arch = styled.div<{ background: string }>`
  width: 150px;
  height: 50px;
  ${({ background }) => `
    border-top: 30px solid ${background};
    border-left: 30px solid ${background};
    border-right: 30px solid ${background};
`};
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
`;
const Top = styled.div<{ background: string }>`
  position: absolute;
  top: 30px;
  height: 30px;
  width: 150px;
  background: ${({ background }) => background};
`;
const Row = styled.div`
  display: flex;
  height: 30px;
  width: 150px;
  align-items: flex-end;
  justify-content: space-between;
`;
const BaseEar = styled.div<{ background: string }>`
  position: relative;
  width: 25px;
  height: 20px;
  background: ${({ background }) => background};
  &::before,
  &::after {
    content: '';
    background: ${({ background }) => background};
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
