import { FC, useState } from 'react';
import RecordShopBrowse from './RecordShopBrowse';
import RecordShopInterior from './RecordShopInterior';

export enum RecordStoreSceneType {
  'store',
  'browse',
}
const RecordShop: FC = () => {
  const [scene, setScene] = useState(RecordStoreSceneType.store);

  if (scene === RecordStoreSceneType.browse) {
    return <RecordShopBrowse setScene={setScene} />;
  }

  if (scene === RecordStoreSceneType.store) {
    return <RecordShopInterior setScene={setScene} />;
  }

  return null;
};

export default RecordShop;
