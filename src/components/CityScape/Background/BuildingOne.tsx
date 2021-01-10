import styled from "styled-components";

const BuildingOne = () => {
  return (
    <Building>
      <Antennae />
    </Building>
  );
};

export const Building = styled.div`
  position: absolute;
  left: 10px;
  bottom: 0;
  height: 270px;
  width: 180px;
  background: #ad3c50;
  &::before {
    content: '';
    position: absolute;
    background: #ad3c50;
  }

  &::before {
    top: -20px;
    height: 20px;
    width: 100%;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  }
`;
export const Antennae = styled.div`
  position: absolute;
  background: #ad3c50;
  width: 3px;
  height: 60px;
  top: -60px;
  left: 30px;
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -4px;
    width: 12px;
    height: 12px;
    animation: pulse 5s ease-in infinite;
    @keyframes pulse {
      from,
      to {
        background: radial-gradient(
          circle closest-side,
          #fcfadb,
          #cdc66f 54%,
          rgba(11, 18, 29, 0)
        );
      }

      50% {
        transform: scale(1.3);
        background: radial-gradient(
          circle closest-side,
          #fcfadb,
          #cdc66f 54%,
          rgba(11, 18, 29, 0)
        );
      }
    }
  }
`;

export default BuildingOne;
