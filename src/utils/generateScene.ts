import getRandomWithin from './getRandomWithin';
import generateBuildings, { BuildingsMetaData } from './generateBuildings';
import generateMountains, { MountainsMetaData } from './generateMountains';
import generateTrees, { Tree } from './generateTrees';
import GRADIENTS from '../constants/gradients';
import { ObjectType, TimeOfDay } from '../enums';
import { PlanetOverrides } from '../types';
import getRandomIntFromInterval from './getRandomIntFromInterval';
import makeItStarry from './makeItStarry';
import makeItLighty from './makeItLighty';

const GROUND_COLOR = {
  [ObjectType.mountains]: ['#909090', '#909090', '#99d693'],
  [ObjectType.buildings]: ['#727695', '#2c2c38', '#99d693'],
};

export type SceneInformation = {
  gradient: string;
  groundColor: string;
  objectsToRender: BuildingsMetaData[] | MountainsMetaData[];
  treesToRender: Tree[];
  shadowsToRender: unknown[];
  planetOverrides: PlanetOverrides;
  starsToRender: JSX.Element[];
  lightsToRender: JSX.Element[];
};

const generateScene = (
  type: ObjectType,
  timeOfDay: TimeOfDay,
  tempo: number
): SceneInformation => {
  if (timeOfDay === TimeOfDay.Day && type === ObjectType.buildings) {
    type = ObjectType.mountains;
  }

console.log(timeOfDay)
console.log(type)
  const result = GRADIENTS[timeOfDay][type];
  const degrees = result.degrees;
  const fromR = getRandomWithin(result.from.red);
  const fromG = getRandomWithin(result.from.green);
  const fromB = getRandomWithin(result.from.blue);
  const toR = getRandomWithin(result.to.red);
  const toG = getRandomWithin(result.to.green);
  const toB = getRandomWithin(result.to.blue);
  const planetOverrides = {
    left: `${getRandomIntFromInterval(0, 700)}px`,
    top: `${getRandomIntFromInterval(10, 100)}px`,
  };
  const gradient = `linear-gradient(${degrees}deg, rgb(${fromR}, ${fromG}, ${fromB}) 0%, rgb(${toR},${toG}, ${toB}) 100%)`;
  let objectsToRender: BuildingsMetaData[] | MountainsMetaData[] = [];
  let treesToRender: Tree[] = [];
  let starsToRender: JSX.Element[] = [];
  let lightsToRender: JSX.Element[] = [];
  let shadowsToRender: unknown[] = [];

  const groundColor = GROUND_COLOR[type][timeOfDay];

  if (type === ObjectType.buildings) {
    objectsToRender = generateBuildings(tempo, timeOfDay);
    treesToRender = generateTrees(tempo, timeOfDay);
    if (timeOfDay === TimeOfDay.Night || timeOfDay === TimeOfDay.Twilight) {
      lightsToRender = makeItLighty(tempo);
    }
  }
  if (type === ObjectType.mountains) {
    objectsToRender = generateMountains(tempo, timeOfDay);
    if (timeOfDay === TimeOfDay.Night) {
      starsToRender = makeItStarry(tempo);
    }
  }

  return {
    gradient,
    groundColor,
    objectsToRender,
    treesToRender,
    shadowsToRender,
    planetOverrides,
    starsToRender,
    lightsToRender,
  };
};

export default generateScene;
