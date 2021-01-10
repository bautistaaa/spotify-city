import { BorderType, Distance, TimeOfDay } from './enums';
import {
  CSSProperties,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import useDegrees from './hooks/useDegrees';
import './Mountain.scss';
import getMountainCssProperties from './utils/getMountainCssProperties';
import getShadowCssProperties from './utils/getShadowCssProperties';
import { RectResult } from './types';
import getPositionRelativeToParent from './utils/getPositionRelativeToParent';

export interface MountainProps {
  sunRect?: RectResult;
  moonRect?: RectResult;
  wrapperRect?: RectResult;
  moonBounds?: DOMRect;
  width: number;
  height: number;
  left: number;
  shadowWidthPercentage: number;
  distance: Distance;
  timeOfDay: TimeOfDay;
  overrides: MountainOverrides;
}
export type MountainOverrides = {
  [K in BorderType]?: {
    color: string;
    shade: string;
  };
} & { zIndex: number };

const Mountains: FC<MountainProps> = ({
  sunRect,
  moonRect,
  wrapperRect,
  height,
  width,
  left,
  distance,
  timeOfDay,
  shadowWidthPercentage,
  overrides = {} as MountainOverrides,
}) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [isShadowOnLeft, setIsShadowOnLeft] = useState<boolean>(false);

  const degrees = useDegrees(ref, {
    wrapperRect,
    sunRect,
    moonRect,
    distance,
    timeOfDay,
  });

  useEffect(() => {
    if (ref.current && wrapperRect && (sunRect || moonRect)) {
      const planetRect = timeOfDay === TimeOfDay.Night ? moonRect : sunRect;
      const { width: mountainWidth } = ref.current.getBoundingClientRect();

      const relativeMountainPositions = getPositionRelativeToParent(
        wrapperRect,
        ref.current.getBoundingClientRect()
      );
      const relativeSunPositions = getPositionRelativeToParent(
        wrapperRect,
        planetRect ?? ({} as RectResult)
      );
      const mountainCenterPoint =
        relativeMountainPositions.left + mountainWidth / 2;
      const sunCenterPoint = relativeSunPositions.left + planetRect?.width / 2;

      setIsShadowOnLeft(mountainCenterPoint < sunCenterPoint);
    }
  }, [ref, wrapperRect, sunRect, moonRect, timeOfDay, distance]);

  const {
    zIndex,
    [BorderType.bottom]: { color, shade } = { color: '', shade: '' },
  } = overrides;
  const styles = {
    left,
    zIndex,
  };
  const mountainCssProperties = getMountainCssProperties(width, height, color);
  const shadowCssProperties = getShadowCssProperties(
    width,
    height,
    shade,
    isShadowOnLeft
  );
  const mountainShadowStyle = {
    ...shadowCssProperties,
  };
  const groundShadowStyle: CSSProperties = {
    background: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0) 100%
      )`,
    position: `absolute`,
    left: '0',
    width: `${shadowWidthPercentage}%`,
    height: `50px`,
    transformOrigin: `0 0`,
    pointerEvents: `none`,
    transform: `skewX(${degrees}deg)`,
  };

  return (
    <>
      <div ref={ref} className="mountain-wrapper" style={styles}>
        <div className="mountain" style={mountainCssProperties}>
          <div className="shade" style={mountainShadowStyle}></div>
        </div>
        {(distance === Distance.Close || distance === Distance.Closest) && (
          <div className="shad0w" style={groundShadowStyle}></div>
        )}
      </div>
    </>
  );
};

export default Mountains;
