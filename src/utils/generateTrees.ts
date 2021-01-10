import { CSSProperties } from 'react';
import { TimeOfDay } from '../enums';
import getRandomIntFromInterval from '../utils/getRandomIntFromInterval';

export interface Tree {
  height: number;
  width: number;
  left: number;
  override: CSSProperties;
}

const TEMPO_UPPER_BOUND = 75;
const overrides = {
  [TimeOfDay.Twilight]: {
    background:
      'linear-gradient(250deg, rgb(253 210 161 / 75%) 0%, rgba(0, 0, 0, 0) 100%)',
  },
};
const calculateGroundObjectCount = (tempo: number) => {
  const initialCount = Math.round((tempo / TEMPO_UPPER_BOUND) * 10);
  return getRandomIntFromInterval(initialCount, initialCount + 2);
};
const RANGE: [number, number] = [0, 800];

const generateTrees = (tempo: number, timeOfDay: TimeOfDay): Tree[] => {
  const treeCount = calculateGroundObjectCount(tempo);
  const trees = [];

  for (let i = 0; i < treeCount; i++) {
    const height = getRandomIntFromInterval(65, 200);
    const width = getRandomIntFromInterval(height / 2, height / 2 + 20);
    trees.push({
      height,
      width,
      left: getRandomIntFromInterval(...RANGE),
      override: overrides[timeOfDay],
    });
  }
  return trees;
};

export default generateTrees;
