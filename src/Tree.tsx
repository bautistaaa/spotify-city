import { FC } from 'react';
import './Tree.scss';

const Tree: FC<{
  height: number;
  width: number;
  left: number;
  override?: object;
}> = ({ height, width, left, override }) => {
  const style = { height, width, left, ...override };
  return <div className="tree" style={style} />;
};

export default Tree;
