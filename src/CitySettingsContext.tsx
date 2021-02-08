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

interface CitySettingsContextValues {
  citySceneType: SceneType;
  setCitySceneType: React.Dispatch<React.SetStateAction<SceneType>>;
  //navigationButtons: SceneType[];
  //setNavigationButtons: React.Dispatch<React.SetStateAction<SceneType[]>>;
}

const CitySettingsContext = React.createContext<CitySettingsContextValues>({
  citySceneType: SceneType.city,
  setCitySceneType: () => {},
  //navigationButtons: [],
  //setNavigationButtons: () => {},
});

const useCitySettingContext = () => useContext(CitySettingsContext);

const CitySettingsProvider: FC = ({ children }) => {
  //const [navigationButtons, setNavigationButtons] = useState<SceneType[]>();
  const [citySceneType, setCitySceneType] = useState<SceneType>(SceneType.city);
  const value = {
    citySceneType,
    setCitySceneType,
  };

  return (
    <CitySettingsContext.Provider value={value}>
      {children}
    </CitySettingsContext.Provider>
  );
};

export { CitySettingsProvider, useCitySettingContext };
