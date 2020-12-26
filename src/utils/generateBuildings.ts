import { TimeOfDay } from '../enums';
import getByWeight from '../utils/getByWeight';
import getRandomIntFromInterval from '../utils/getRandomIntFromInterval';
import getObjectCount from './getObjectCount';

export interface BuildingsMetaData {
  type: string;
  wallColor: string;
  left: number;
  overrides: { [k: string]: string };
  roofColor: string;
}
const TEMPO_UPPER_BOUND = 250;
const flip: { [k: string]: string } = {
  transform: `scale(-1, 1)`,
};
const COLORS: { [k: number]: string } = {
  [TimeOfDay.Night]: 'linear-gradient(180deg, #f3f2fe 0%, #8891b9 100%',
  [TimeOfDay.Twilight]: '#1e1547',
};
const ROOF_COLORS = ['#4699b6', '#ab5454', '#7154ab'];
const SIZE_BY_WEIGHT: [string, number][] = [
  ['small', 5],
  ['medium', 2],
  ['large', 1],
];
const SIZE: { [k: string]: number } = {
  small: 70,
  medium: 70,
  large: 90,
};
const getRoofColor = (timeOfDay: TimeOfDay) => {
  if (timeOfDay === TimeOfDay.Night) {
    return ROOF_COLORS[getRandomIntFromInterval(0, 2)];
  }

  return '#514b6e';
};

const generateBuildings = (
  tempo: number,
  timeOfDay: TimeOfDay
): BuildingsMetaData[] => {
  const buildingCount = getObjectCount(tempo, TEMPO_UPPER_BOUND);
  const buildings = [];
  let lastX = getRandomIntFromInterval(10, 100);
  let lastSize = 0;

  for (let i = 0; i < buildingCount; i++) {
    const isFlipped = lastX < 200;
    const type = getByWeight(SIZE_BY_WEIGHT) ?? 'small';
    const size = SIZE[type];
    const wallColor = COLORS[timeOfDay];
    lastSize = size;

    buildings.push({
      type,
      wallColor,
      left: lastX,
      roofColor: getRoofColor(timeOfDay),
      overrides: isFlipped ? flip : {},
    });

    lastX += getRandomIntFromInterval(0, 70) + (lastSize - lastSize * 0.2);
  }

  return buildings;
};

export default generateBuildings;
