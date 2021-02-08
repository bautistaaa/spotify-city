import { SceneType } from '../enums';
import { NavigationMappings } from '../CitySettingsContext';

const getCityMappings = (citySceneType: SceneType) => {
  return NavigationMappings[citySceneType];
};

export default getCityMappings;
