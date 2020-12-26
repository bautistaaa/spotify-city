import { BorderType } from './enums';
import { FC, MutableRefObject, useEffect, useRef } from 'react';

import './Mountain.scss';
import getClipPathFromCoordinates from './utils/getClipPathFromCoordinates';

const createBackgroundColor = (
  width: number,
  height: number,
  color: string
) => {
  return {
    borderBottom: `${height}px solid ${color}`,
    borderLeft: `${width}px solid transparent`,
    borderRight: `${width}px solid transparent`,
  };
};
const createShadow = (width: number, height: number, color: string) => {
  return {
    borderBottom: `${height}px solid ${color}`,
    borderLeft: `${width}px solid transparent`,
    marginLeft: `${-width}px`,
  };
};

export type MountainOverrides = {
  [K in BorderType]?: {
    color: string;
    shade: string;
  };
} & { zIndex: number };
const Mountains: FC<{
  planetBounds?: DOMRect;
  width: number;
  height: number;
  left: number;
  overrides: MountainOverrides;
}> = ({
  planetBounds = {} as DOMRect,
  height,
  width,
  left,
  overrides = {} as MountainOverrides,
}) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    if (ref.current) {
      const { x, y } = ref.current.getBoundingClientRect();
      const { x: pX, y: pY } = planetBounds;
      const degrees = getClipPathFromCoordinates({ x: pX, y: pY }, { x, y });
    }
  }, []);
  const {
    zIndex,
    [BorderType.bottom]: { color, shade } = { color: '', shade: '' },
  } = overrides;
  const styles = {
    left,
    zIndex,
  };
  const backgroundColor = createBackgroundColor(width, height, color);
  const shadeColor = createShadow(width, height, shade);
  const shadeStyles = {
    ...shadeColor,
  };

  return (
    <div ref={ref} className="mountain-wrapper" style={styles}>
      <div className="mountain" style={backgroundColor}>
        <div className="shade" style={shadeStyles}></div>
      </div>
    </div>
  );
};

export default Mountains;
