const getMountainCssProperties = (
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

export default getMountainCssProperties;
