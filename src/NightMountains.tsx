import getRandomIntFromInterval from './utils/getRandomIntFromInterval';
import './NightMountains.scss';
import { FC } from 'react';

const Star: FC<{ top: number; left: number }> = ({ top, left }) => {
  const styles = {
    top,
    left,
  };
  return <div className="star" style={styles} />;
};
const makeItStarry = (amount: number) => {
  let stars = [];
  for (let i = 0; i < amount; i++) {
    const top = getRandomIntFromInterval(1, 600);
    const left = getRandomIntFromInterval(1, 800);

    stars.push(<Star top={top} left={left} key={i} />);
  }

  return stars;
};
const NightMountains = () => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Night Mountains</h3>
      <div className="night">
        <div className="moon"></div>
        {makeItStarry(50)}
        <div className="ground-wrapper">
          <div className="mountain-biggest-wrapper">
            <div className="mountain-biggest">
              <div className="shade-biggest"></div>
            </div>
          </div>
          <div className="mountain-biggest2-wrapper">
            <div className="mountain-biggest">
              <div className="shade-biggest"></div>
            </div>
          </div>
          <div className="mountain-wrapper">
            <div className="mountain">
              <div className="shade"></div>
            </div>
          </div>
          <div className="mountain-2-wrapper">
            <div className="mountain-2">
              <div className="shade-2"></div>
            </div>
          </div>
          <div className="mountain-3-wrapper">
            <div className="mountain-3">
              <div className="shade-3"></div>
            </div>
          </div>
          <div className="ground">
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NightMountains;
