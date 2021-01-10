import { RefObject, useEffect, useState } from 'react';
import getPositionRelativeToParent from '../utils/getPositionRelativeToParent';
import getDegreesFromCoordinates from '../utils/getDegreesFromCoordinates';
import { Distance, TimeOfDay } from '../enums';
import { RectResult } from '../types';

interface Input {
  sunRect?: RectResult;
  moonRect?: RectResult;
  wrapperRect?: RectResult;
  distance: Distance;
  timeOfDay: TimeOfDay;
}
const useDegrees = <T extends HTMLElement>(
  ref: RefObject<T>,
  { sunRect, moonRect, wrapperRect, distance, timeOfDay }: Input
): number => {
  const [degrees, setDegrees] = useState<number>(0);

  useEffect(() => {
    if (ref.current && wrapperRect && (sunRect || moonRect)) {
      const planetRect = timeOfDay === TimeOfDay.Night ? moonRect : sunRect;
      const {
        width: mountainWidth,
        height: mountainHeight,
      } = ref.current.getBoundingClientRect();

      if (distance === Distance.Close || distance === Distance.Closest) {
        const relativeMountainPositions = getPositionRelativeToParent(
          wrapperRect,
          ref.current.getBoundingClientRect()
        );
        const relativeSunPositions = getPositionRelativeToParent(
          wrapperRect,
          planetRect ?? ({} as RectResult)
        );

        const ground = wrapperRect.height - 50;
        const degrees = getDegreesFromCoordinates(
          {
            x: relativeSunPositions.left + 150 / 2,
            y: relativeSunPositions.top + 150 / 2,
          },
          {
            x: relativeMountainPositions.left + mountainWidth / 2,
            y: ground - mountainHeight / 2,
          }
        );

        setDegrees(degrees);
      }
    }
  }, [ref, wrapperRect, sunRect, moonRect, timeOfDay, distance]);

  return degrees;
};

export default useDegrees;
