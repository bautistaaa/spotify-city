import React, { FC, useContext, useState } from 'react';
import { SceneType } from './enums';

interface CitySettingsContextValues {
  citySceneType: SceneType;
  setCitySceneType: React.Dispatch<React.SetStateAction<SceneType>>;
}

const CitySettingsContext = React.createContext<CitySettingsContextValues>({
  citySceneType: SceneType.city,
  setCitySceneType: () => {},
});

const useCitySettingContext = () => useContext(CitySettingsContext);

const CitySettingsProvider: FC = ({ children }) => {
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
