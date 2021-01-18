import DayMountains from './DayMountains';
import NightMountains from './NightMountains';
import TwilightMountains from './TwilightMountains';
import TwilightBuildings from './TwilightBuildings';
import NightBuildings from './NightBuildings';

const Original = () => {
  return (
    <div>
      <NightMountains />
      <TwilightMountains />
      <DayMountains />
      <TwilightBuildings />
      <NightBuildings />
    </div>
  );
};

export default Original;
