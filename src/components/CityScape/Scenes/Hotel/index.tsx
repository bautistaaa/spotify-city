import { FC, useState } from 'react';
import HotelLobby from './HotelLobby';
import HotelBreakRoom from './HotelBreakRoom';

export enum HotelSceneType {
  'featuredPlaylists',
  'lobby',
  'newReleases',
}

const Hotel: FC = () => {
  const [sceneType, setSceneType] = useState(HotelSceneType.lobby);
  if (sceneType === HotelSceneType.lobby) {
    return <HotelLobby setSceneType={setSceneType} />;
  }
  return <HotelBreakRoom sceneType={sceneType} setSceneType={setSceneType} />;
};

export default Hotel;
