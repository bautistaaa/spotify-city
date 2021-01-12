import styled from 'styled-components/macro';
import makeItPhony, { PhoneDistance } from '../../../utils/makeItPhony';
import makeItHeady from '../../../utils/makeItHeady';

const renderFarPhones = () => {
  return makeItPhony(45, PhoneDistance.Far);
};
const renderClosePhones = () => {
  return makeItPhony(30, PhoneDistance.Close);
};
const renderClosestPhones = () => {
  return makeItPhony(15, PhoneDistance.Closest);
};

const renderFarHeads = () => {
  return makeItHeady(10, PhoneDistance.Far);
};
const renderCloseHeads = () => {
  return makeItHeady(10, PhoneDistance.Close);
};
const renderClosestHeads = () => {
  return makeItHeady(8, PhoneDistance.Closest);
};

const MusicHallScene = () => {
  return (
    <Wrapper>
      <TopHalf></TopHalf>
      <BottomHalf>
        {renderFarPhones()}
        {renderClosePhones()}
        {renderClosestPhones()}

        {renderFarHeads()}
        {renderCloseHeads()}
        {renderClosestHeads()}
      </BottomHalf>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 700px;
  width: 100%;
  max-width: 900px;
  background: #160328;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  animation: fade 1.5s;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const TopHalf = styled.div``;
const BottomHalf = styled.div``;

export default MusicHallScene;
