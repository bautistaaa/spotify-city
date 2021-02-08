import { TimeOfDay } from '../enums';

const MUSIC_BLURBS: { [K in TimeOfDay]: string[] } = {
  [TimeOfDay.Night]: [
    'really emo',
    'lie in your bed and cry',
    'I just got dumped type',
    'my favorite character in a movie just died type',
  ],
  [TimeOfDay.Twilight]: [
    'pretty emo',
    'super chill',
    'not quite so feel sorry for yourself type',
    'kick up your feet and smile type',
  ],
  [TimeOfDay.Day]: [
    'happy-ish',
    'feel good type',
    'dancing in the street type',
    'that smile like an anime character type',
  ],
};

export const getRandomBlurbByTimeOfDay = (timeOfDay: TimeOfDay) => {
  const blurbs = MUSIC_BLURBS[timeOfDay];
  return blurbs[Math.floor(Math.random() * blurbs.length)];
};

export default MUSIC_BLURBS;
