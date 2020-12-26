import getRandomIntFromInterval from './getRandomIntFromInterval';

/**
 * Calculate number of objects to render on the ground
 * e.g: mountains/buildings
 */
const getObjectCount = (tempo: number, upperBound: number) => {
  const initialCount = Math.round((tempo / upperBound) * 10);
  return getRandomIntFromInterval(initialCount, initialCount + 2);
};

export default getObjectCount;
