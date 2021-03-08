import styled from 'styled-components';

const NextSvg = () => {
  return (
    <Button>
      <svg role="img" height="16" width="16" viewBox="0 0 16 16">
        <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
      </svg>
    </Button>
  );
};
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  outline: none;
  margin: 0;
  padding: 0;
  border: none;
`;

export default NextSvg;
