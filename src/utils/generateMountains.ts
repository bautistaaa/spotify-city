import { Distance, TimeOfDay } from '../enums';
import OVERRIDES, { Overrides } from '../constants/mountains/overrides';
import getByWeight from '../utils/getByWeight';
import getObjectCount from '../utils/getObjectCount';
import getRandomIntFromInterval from './getRandomIntFromInterval';

export interface MountainsMetaData {
  height: number;
  width: number;
  distance: number;
  overrides: Overrides;
  left: number;
}
const TEMPO_UPPER_BOUND = 250;
const DISTANCE_BY_WEIGHT: [number, number][] = [
  [Distance.Closest, 1],
  [Distance.Close, 1],
  [Distance.Far, 3],
  [Distance.Farthest, 4],
];
const HEIGHTS: { [k: number]: [number, number] } = {
  [Distance.Closest]: [200, 240],
  [Distance.Close]: [150, 180],
  [Distance.Far]: [110, 135],
  [Distance.Farthest]: [60, 90],
};
const WIDTHS: { [k: number]: [number, number] } = {
  [Distance.Closest]: [120, 145],
  [Distance.Close]: [95, 120],
  [Distance.Far]: [75, 90],
  [Distance.Farthest]: [50, 70],
};

const generateMountains = (
  tempo: number,
  timeOfDay: TimeOfDay
): MountainsMetaData[] => {
  const mountainCount = getObjectCount(tempo, TEMPO_UPPER_BOUND);
  const mountains: MountainsMetaData[] = [];
  let lastX = getRandomIntFromInterval(10, 100);
  let lastSize = 0;

  for (let i = 0; i < mountainCount; i++) {
    const distance =
      getByWeight<number>(DISTANCE_BY_WEIGHT) ?? DISTANCE_BY_WEIGHT[3][0];
    const [minHeight, maxHeight] = HEIGHTS[distance];
    const [minWidth, maxWidth] = WIDTHS[distance];
    const height = getRandomIntFromInterval(minHeight, maxHeight);
    const width = getRandomIntFromInterval(minWidth, maxWidth);
    const overrides = OVERRIDES[timeOfDay][distance];
    lastSize = width * 2;

    mountains.push({
      height,
      width,
      distance,
      overrides,
      left: lastX,
    });

    lastX += getRandomIntFromInterval(0, 70) + (lastSize - lastSize * 0.2);
  }

  return mountains;
};

export default generateMountains;
