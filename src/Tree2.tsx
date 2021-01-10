import { CSSProperties, FC } from 'react';
import './Tree2.scss';

export interface TreeProps {
  height: number;
  width: number;
  left: number;
  override?: CSSProperties;
}
const Tree2: FC<TreeProps> = ({ height, width, left, override }) => {
  const style = { height, width, left, ...override };
  return <div className="tree2" style={style} />;
};

export default Tree2;
