import StreetLight from '../StreetLight';
import getRandomIntFromInterval from '../utils/getRandomIntFromInterval';
import getObjectCount from './getObjectCount';

const TEMPO_UPPER_BOUND = 100;
const WIDTH = 35;

const makeItLighty = (amount: number) => {
  // divided by 20 for no real reason other than to decrease count
  const lightCount = getObjectCount(amount / 20, TEMPO_UPPER_BOUND);
  let stars = [];
  let lastX = 0;

  for (let i = 0; i < lightCount; i++) {
    let left = getRandomIntFromInterval(1, 725);
    if (lastX > 0) {
      const xPlusWidth = lastX + WIDTH;
      // overlap!
      if (left <= xPlusWidth) {
        left = getRandomIntFromInterval(xPlusWidth + 20, 725);
      }
    }

    stars.push(<StreetLight left={left} key={i} />);

    lastX = left;
  }

  return stars;
};

export default makeItLighty;
