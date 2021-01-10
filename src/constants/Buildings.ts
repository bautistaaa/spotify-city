import { FunctionComponent } from 'react';
import DonutShop from '../components/CityScape/DonutShop';
import Garage from '../components/CityScape/Garage';
import MiniShop from '../components/CityScape/MiniShop';
import Office from '../components/CityScape/Office';
import School from '../components/CityScape/School';
import Shop from '../components/CityScape/Shop';
import SignBuilding from '../components/CityScape/SignBuilding';

const Buildings: Record<string, FunctionComponent> = {
  donutShop: DonutShop,
  garage: Garage,
  miniShop: MiniShop,
  office: Office,
  school: School,
  shop: Shop,
  signBuilding: SignBuilding,
};

export default Buildings;
