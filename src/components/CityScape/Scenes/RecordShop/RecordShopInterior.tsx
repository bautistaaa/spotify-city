import { FC, useState } from 'react';
import styled from 'styled-components/macro';
import RecordShopBrowse from './RecordShopBrowse';
import RecordShopBulletinBoard from './RecordShopBulletinBoard';

export enum RecordStoreSceneType {
  'store',
  'bulletin',
  'browse',
}
const RecordShopInterior: FC = () => {
  const [scene, setScene] = useState(RecordStoreSceneType.bulletin);

  if (scene === RecordStoreSceneType.browse) {
    return <RecordShopBrowse />;
  }

  if (scene === RecordStoreSceneType.bulletin) {
    return <RecordShopBulletinBoard />;
  }

  return (
    <Wrapper>
      <Counter>
        <RecordBin></RecordBin>
      </Counter>
      <Floor></Floor>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 700px;
  width: 100%;
  max-width: 900px;
  background: white;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  animation: fade 1.5s;
  background: #f4e0bc;
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Floor = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  background: black;
`;
const Counter = styled.div`
  width: 36%;
  height: 150px;
  margin-bottom: -40px;
  background: brown;
  z-index: 10;
`;
const BaseRecordBin = styled.div`
  position: absolute;
`;
const RecordBin = styled(BaseRecordBin)`
  left: 50px;
  bottom: 0;
  background: brown;
  width: 200px;
  height: 200px;
`;

export default RecordShopInterior;
