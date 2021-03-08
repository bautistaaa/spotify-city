import React, { FC, useContext, useState } from 'react';
import { SceneType } from './enums';
export const NavigationMappings: { [K in SceneType]: SceneType[] } = {
  [SceneType.city]: [],
  [SceneType.donutShop]: [SceneType.city],
  [SceneType.musicHall]: [SceneType.city],
  [SceneType.musicHallStage]: [SceneType.city, SceneType.musicHall],
  [SceneType.recordShop]: [SceneType.city],
  [SceneType.recordShopBrowse]: [SceneType.city, SceneType.recordShop],
  [SceneType.hotel]: [SceneType.city],
  [SceneType.hotelNewReleases]: [SceneType.city, SceneType.hotel],
  [SceneType.hotelPlaylists]: [SceneType.city, SceneType.hotel],
};

export interface TrackData {
  uri: string;
  id: string;
}
interface CitySettingsContextValues {
  citySceneType: SceneType;
  setCitySceneType: React.Dispatch<React.SetStateAction<SceneType>>;
  currentTrack: TrackData;
  setCurrentTrack: React.Dispatch<React.SetStateAction<TrackData>>;
}

const CitySettingsContext = React.createContext<CitySettingsContextValues>({
  citySceneType: SceneType.city,
  setCitySceneType: () => {},
  currentTrack: { id: '', uri: '' },
  setCurrentTrack: () => {},
});

const useCitySettingContext = () => useContext(CitySettingsContext);

const CitySettingsProvider: FC = ({ children }) => {
  const [citySceneType, setCitySceneType] = useState<SceneType>(SceneType.city);
  const [currentTrack, setCurrentTrack] = useState<TrackData>({
    uri: '',
    id: '',
  });
  const value = {
    citySceneType,
    setCitySceneType,
    currentTrack,
    setCurrentTrack,
  };

  return (
    <CitySettingsContext.Provider value={value}>
      {children}
    </CitySettingsContext.Provider>
  );
};

export { CitySettingsProvider, useCitySettingContext };
