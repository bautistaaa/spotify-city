import { FC } from 'react';
import './MediumHouse.scss';

const MediumHouse: FC<{
  left: number;
  roofColor?: string;
  wallColor?: string;
  overrides?: object;
}> = ({ left, roofColor, wallColor, overrides = {} }) => {
  const style = {
    left,
    ...overrides,
  };
  const roofStyle = {
    background: roofColor,
  };
  const wallStyle = {
    background: wallColor,
  };
  return (
    <div className="house-wrapper" style={style}>
      <div className="wall"></div>
      <div className="house" style={wallStyle}></div>
      <div className="roof" style={roofStyle}></div>
    </div>
  );
};

export default MediumHouse;
