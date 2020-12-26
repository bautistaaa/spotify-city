type Coordinate = {
  x: number;
  y: number;
};
const getAngleInDegrees = (
  fromCoordinate: Coordinate,
  toCoordinate: Coordinate
) => {
  const degrees =
    (Math.atan2(
      toCoordinate.y - fromCoordinate.y,
      toCoordinate.x - fromCoordinate.x
    ) *
      180) /
    Math.PI;

  console.log(degrees);
  return degrees;
};

const getClipPathFromCoordinates = (
  fromCoordinate: Coordinate,
  toCoordinate: Coordinate
) => {
  return getAngleInDegrees(fromCoordinate, toCoordinate);
};

export default getClipPathFromCoordinates;
