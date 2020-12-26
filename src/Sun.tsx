import { forwardRef, ForwardRefRenderFunction } from 'react';
import './Sun.scss';

const Sun: ForwardRefRenderFunction<
  HTMLDivElement,
  {
    styles: {
      left: string;
      top: string;
    };
  }
> = ({ styles }, ref) => {
  return <div ref={ref} className="sun" style={styles}></div>;
};

export default forwardRef(Sun);

