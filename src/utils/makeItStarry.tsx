import { FC } from 'react';
import getRandomIntFromInterval from '../utils/getRandomIntFromInterval';
import getObjectCount from './getObjectCount';

const TEMPO_UPPER_BOUND = 75;

const Star: FC<{ top: number; left: number }> = ({ top, left }) => {
  const styles = {
    top,
    left,
  };
  return <div className="star" style={styles} />;
};

const makeItStarry = (amount: number) => {
  const starCount = getObjectCount(amount, TEMPO_UPPER_BOUND);
  let stars = [];
  for (let i = 0; i < starCount; i++) {
    const top = getRandomIntFromInterval(1, 600);
    let left = getRandomIntFromInterval(1, 800);

    stars.push(<Star top={top} left={left} key={i} />);
  }

  return stars;
};

export default makeItStarry;
