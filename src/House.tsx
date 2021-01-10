import { FC } from 'react';

export interface HouseProps {
  type: string;
  left: number;
  roofColor?: string;
  wallColor?: string;
  windowColor?: string;
  overrides?: object;
}
const House: FC<HouseProps> = ({
  type,
  left,
  roofColor,
  wallColor,
  overrides = {},
}) => {
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
  if (type === 'medium') {
    return (
      <div className="house-wrapper" style={style}>
        <div className="wall"></div>
        <div className="house" style={wallStyle}></div>
        <div className="roof" style={roofStyle}></div>
      </div>
    );
  }
  if (type === 'large') {
    return (
      <div className="large-house-wrapper" style={style}>
        <div className="wall"></div>
        <div className="house" style={wallStyle}>
          <div className="window"></div>
        </div>
        <div className="roof" style={roofStyle}></div>
      </div>
    );
  }
  return (
    <div className="small-house-wrapper" style={style}>
      <div className="small-wall"></div>
      <div className="small-house" style={wallStyle}></div>
      <div className="small-roof" style={roofStyle}></div>
    </div>
  );
};

export default House;
