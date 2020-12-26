import { FC } from 'react';
import './LargeHouse.scss';

const LargeHouse: FC<{
  left: number;
  roofColor?: string;
  wallColor?: string;
}> = ({ left, roofColor, wallColor }) => {
  const style = {
    left,
  };
  const roofStyle = {
    background: roofColor,
  };
  const wallStyle = {
    background: wallColor,
  };
  return (
    <div className="large-house-wrapper" style={style}>
      <div className="wall"></div>
      <div className="house" style={wallStyle}>
        <div className="window"></div>
      </div>
      <div className="roof" style={roofStyle}></div>
    </div>
  );
};

export default LargeHouse;
