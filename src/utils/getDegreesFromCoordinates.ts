type Coordinate = {
  x: number;
  y: number;
};
const getAngleInDegrees = (
  fromCoordinate: Coordinate,
  toCoordinate: Coordinate
) => {
  //console.log(`sun ${JSON.stringify(fromCoordinate)}`);
  //console.log(`mountain ${JSON.stringify(toCoordinate)}`);
  //console.log(`y substracted ${toCoordinate.y - fromCoordinate.y}`);
  //console.log(`x substracted ${toCoordinate.x - fromCoordinate.x}`);
  const degrees =
    (Math.atan2(
      toCoordinate.x - fromCoordinate.x,
      toCoordinate.y - fromCoordinate.y
    ) *
      180) /
    Math.PI;
  //console.log(`degrees ${degrees}`);
  return degrees;
};

// 137 -> 237
const getDegreesFromCoordinates = (
  fromCoordinate: Coordinate,
  toCoordinate: Coordinate
) => {
  return getAngleInDegrees(fromCoordinate, toCoordinate);
};

export default getDegreesFromCoordinates;
