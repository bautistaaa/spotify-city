import { FC } from 'react';
import './SmallHouse.scss';

const SmallHouse: FC<{
  left: number;
  roofColor?: string;
  wallColor?: string;
  windowColor?: string;
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
    <div className="small-house-wrapper" style={style}>
      <div className="small-wall"></div>
      <div className="small-house" style={wallStyle}></div>
      <div className="small-roof" style={roofStyle}></div>
    </div>
  );
};

export default SmallHouse;
