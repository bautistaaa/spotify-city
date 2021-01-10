import { ShadowCssProperties } from '../types';

const getShadowCssProperties = (
  width: number,
  height: number,
  color: string,
  isLeft: boolean
): ShadowCssProperties => {
  return {
    borderBottom: `${height}px solid ${color}`,
    ...(isLeft
      ? {
          borderLeft: `${width}px solid transparent`,
          marginLeft: `${-width}px`,
        }
      : {
          borderRight: `${width}px solid transparent`,
          marginLeft: `0`,
        }),
  };
};

export default getShadowCssProperties;
