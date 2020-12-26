import { FC } from 'react';
import './Tree2.scss';

const Tree2: FC<{
  height: number;
  width: number;
  left: number;
  override?: object;
}> = ({ height, width, left, override }) => {
  const style = { height, width, left, ...override };
  return <div className="tree2" style={style} />;
};

export default Tree2;
