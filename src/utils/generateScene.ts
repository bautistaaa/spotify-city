import getRandomWithin from './getRandomWithin';
import generateBuildings from './generateBuildings';
import generateMountains from './generateMountains';
import generateTrees from './generateTrees';
import GRADIENTS from '../constants/gradients';
import { ObjectType, TimeOfDay } from '../enums';

const GROUND_COLOR = {
  [ObjectType.mountains]: ['#909090', '#909090', '#99d693'],
  [ObjectType.buildings]: ['#727695', '#2c2c38', '#99d693'],
};

export type SceneInformation = {
  gradient: string;
  groundColor: string;
  objectsToRender: unknown[];
  treesToRender: unknown[];
  shadowsToRender: unknown[];
};

const generateScene = (
  type: ObjectType,
  timeOfDay: TimeOfDay,
  tempo: number
): SceneInformation => {
  if (timeOfDay === TimeOfDay.Day && type === ObjectType.buildings) {
    type = ObjectType.mountains;
  }

  const result = GRADIENTS[timeOfDay][type];
  const degrees = result.degrees;
  const fromR = getRandomWithin(result.from.red);
  const fromG = getRandomWithin(result.from.green);
  const fromB = getRandomWithin(result.from.blue);
  const toR = getRandomWithin(result.to.red);
  const toG = getRandomWithin(result.to.green);
  const toB = getRandomWithin(result.to.blue);
  const gradient = `linear-gradient(${degrees}deg, rgb(${fromR}, ${fromG}, ${fromB}) 0%, rgb(${toR},${toG}, ${toB}) 100%)`;
  let objectsToRender: unknown[] = [];
  let treesToRender: unknown[] = [];
  let shadowsToRender: unknown[] = [];

  const groundColor = GROUND_COLOR[type][timeOfDay];

  if (type === ObjectType.buildings) {
    objectsToRender = generateBuildings(tempo, timeOfDay);
    treesToRender = generateTrees(tempo, timeOfDay);
  }
  if (type === ObjectType.mountains) {
    objectsToRender = generateMountains(tempo, timeOfDay);
  }

  return {
    gradient,
    groundColor,
    objectsToRender,
    treesToRender,
    shadowsToRender,
  };
};

export default generateScene;
