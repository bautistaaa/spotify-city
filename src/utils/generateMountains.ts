import OVERRIDES from '../constants/mountains/overrides';
import { BorderType, Distance, TimeOfDay } from '../enums';
import getByWeight from '../utils/getByWeight';
import getObjectCount from '../utils/getObjectCount';
import getRandomIntFromInterval from './getRandomIntFromInterval';

export type MountainOverrides = {
  [K in BorderType]?: {
    color: string;
    shade: string;
  };
} & { zIndex: number };

const TEMPO_UPPER_BOUND = 250;
const SCREEN_WIDTH = 800;

export interface MountainsMetaData {
  height: number;
  width: number;
  distance: number;
  overrides: MountainOverrides;
  left: number;
  shadowWidthPercentage: number;
}
type DistanceWeight = [distance: Distance, weight: number];
type Bounds = [lowerBound: number, upperBound: number];

const DISTANCE_BY_WEIGHT: DistanceWeight[] = [
  [Distance.Closest, 1],
  [Distance.Close, 1],
  [Distance.Far, 3],
  [Distance.Farthest, 4],
];
const HEIGHTS: { [K in Distance]: Bounds } = {
  [Distance.Closest]: [200, 240],
  [Distance.Close]: [150, 180],
  [Distance.Far]: [110, 135],
  [Distance.Farthest]: [60, 90],
};
const WIDTHS: { [K in Distance]: Bounds } = {
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
  let rightCornerOnPreviousMountain = 0;
  let lastX = getRandomIntFromInterval(10, 100);
  let lastSize = 0;

  for (let i = 0; i < mountainCount; i++) {
    const distance =
      getByWeight(DISTANCE_BY_WEIGHT) ??
      DISTANCE_BY_WEIGHT[Distance.Farthest][0];
    const [minHeight, maxHeight] = HEIGHTS[distance];
    const [minWidth, maxWidth] = WIDTHS[distance];
    const height = getRandomIntFromInterval(minHeight, maxHeight);
    const width = getRandomIntFromInterval(minWidth, maxWidth);
    const overrides = OVERRIDES[timeOfDay][distance];
    const currentLeftCorner = lastX;

    const overlap = rightCornerOnPreviousMountain - currentLeftCorner;

    rightCornerOnPreviousMountain = lastX + width * 2;
    lastSize = width * 2;

    if (lastX + lastSize < SCREEN_WIDTH) {
      mountains.push({
        height,
        width,
        distance,
        overrides,
        left: lastX,
        shadowWidthPercentage: 100,
      });
      // update previous shadow width
      if (
        overlap > 0 &&
        (distance === Distance.Close || distance === Distance.Closest)
      ) {
        const previousMountain = mountains[i - 1];
        const previousWidth = previousMountain.width * 2;
        const newWidthPercentage =
          ((previousWidth - overlap) / previousWidth) * 100;

        previousMountain.shadowWidthPercentage = newWidthPercentage;
      }

      lastX += getRandomIntFromInterval(0, 70) + (lastSize - lastSize * 0.2);
    } else {
      break;
    }
  }
  return mountains;
};

export default generateMountains;
