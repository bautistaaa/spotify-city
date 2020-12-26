import { FC } from 'react';
import './TreeGroup.scss';

const TreeGroup: FC<{ left?: number; right?: number }> = ({
  children,
  left,
  right,
}) => {
  const style = { left, right };
  return (
    <div className="tree-group-wrapper" style={style}>
      <div className="tree-group">{children}</div>
    </div>
  );
};

export default TreeGroup;
