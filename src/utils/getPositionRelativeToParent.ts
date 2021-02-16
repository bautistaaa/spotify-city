import { RectResult } from '../types';

// margin 199
export type RelativePositioning = {
  left: number;
  top: number;
  bottom: number;
  right: number;
};
const getPositionRelativeToParent = (
  parent: RectResult,
  child: RectResult
): RelativePositioning => {
  //console.log(`parent ${parent.left} ${parent.top}`);
  //console.log(`child ${child.left} ${child.top}`);
  const { left: pX, top: pY, bottom: pBottom, right: pRight } = parent;
  const { left: cX, top: cY, bottom: cBottom, right: cRight } = child;
  //console.log({
  //left: cX - pX,
  //top: cY - pY,
  //bottom: cBottom - pBottom,
  //right: cRight - pRight,
  //});
  return {
    left: cX - pX,
    top: cY - pY,
    bottom: cBottom - pBottom,
    right: cRight - pRight,
  };
};

export default getPositionRelativeToParent;
