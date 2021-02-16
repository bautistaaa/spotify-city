import { RefObject, useEffect, useState } from 'react';
import getPositionRelativeToParent from '../utils/getPositionRelativeToParent';
import getDegreesFromCoordinates from '../utils/getDegreesFromCoordinates';
import { RectResult } from '../types';

interface Input {
  sunMoonRect?: RectResult;
  wrapperRect?: RectResult;
  x: number;
}
const useDegrees = <T extends HTMLElement>(
  ref: RefObject<T>,
  { sunMoonRect, wrapperRect, x }: Input
): number => {
  const [degrees, setDegrees] = useState(0);
  useEffect(() => {
    if (ref.current && wrapperRect && sunMoonRect) {
      const {
        width: buildingWidth,
        height: buildingHeight,
      } = ref.current.getBoundingClientRect();

      const relativeBuildingPositions = getPositionRelativeToParent(
        wrapperRect,
        ref.current.getBoundingClientRect()
      );
      const relativeSunPositions = getPositionRelativeToParent(
        wrapperRect,
        sunMoonRect ?? ({} as RectResult)
      );

      const ground = wrapperRect.height - 50;
      const degrees = getDegreesFromCoordinates(
        {
          x: relativeSunPositions.left + 100 / 2,
          y: relativeSunPositions.top + 100 / 2,
        },
        {
          x:
            x < 0
              ? 500 + relativeBuildingPositions.left + buildingWidth / 2
              : relativeBuildingPositions.left + buildingWidth / 2,
          y: ground - buildingHeight / 2,
        }
      );

      setDegrees(degrees);
    }
  }, [ref, wrapperRect, sunMoonRect, x]);

  return degrees;
};

export default useDegrees;
