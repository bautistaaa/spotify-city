import { forwardRef, ForwardRefRenderFunction } from 'react';
import './Moon.scss';

const Moon: ForwardRefRenderFunction<
  HTMLDivElement,
  {
    styles: {
      left: string;
      top: string;
    };
  }
> = ({ styles }, ref) => {
  return <div ref={ref} className="moon" style={styles}></div>;
};

export default forwardRef(Moon);
