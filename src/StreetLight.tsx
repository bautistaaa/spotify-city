import { FC } from 'react';
import './StreetLight.scss';

const StreetLight: FC<{ left: number }> = ({ left }) => {
  const style = {
    left,
  };

  return (
    <div className="container" style={style}>
      <div className="wrapper">
        <div className="light"></div>
      </div>
    </div>
  );
};

export default StreetLight;
