import { FC, useState } from 'react';
import RecordShopBrowse from './RecordShopBrowse';
import RecordShopBulletinBoard from './RecordShopBulletinBoard';
import RecordShopInterior from './RecordShopInterior';

export enum RecordStoreSceneType {
  'store',
  'bulletin',
  'browse',
}
const RecordShop: FC = () => {
  const [scene, setScene] = useState(RecordStoreSceneType.store);

  if (scene === RecordStoreSceneType.browse) {
    return <RecordShopBrowse />;
  }

  if (scene === RecordStoreSceneType.bulletin) {
    return <RecordShopBulletinBoard />;
  }

  if (scene === RecordStoreSceneType.store) {
    return <RecordShopInterior setScene={setScene} />;
  }

  return null;
};

export default RecordShop;
