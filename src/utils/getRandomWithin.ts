const getRandomWithin = (range: [number, number]) => {
  //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
  const goldenRatio = 0.618033988749895;
  const [lowerBound, upperBound] = range;
  let r = Math.random();
  r += goldenRatio;
  r %= 1;
  return Math.floor(lowerBound + r * (upperBound + 1 - lowerBound));
};

export default getRandomWithin;
