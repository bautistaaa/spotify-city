import { TimeOfDay } from '../enums';

const getTimeOfDay = (valence = 0) => {
  const convertedValence = Math.round(valence * 10);
console.log(convertedValence)
  if (convertedValence < 4) return TimeOfDay.Night;
  if (convertedValence < 8) return TimeOfDay.Twilight;
  return TimeOfDay.Day;
};

export default getTimeOfDay;
