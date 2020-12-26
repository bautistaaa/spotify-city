import { ObjectType, TimeOfDay } from '../enums';

type ColorRange = [number, number];
interface RGBRange {
  red: ColorRange;
  green: ColorRange;
  blue: ColorRange;
}
interface GradientInfo {
  degrees: number;
  from: RGBRange;
  to: RGBRange;
}
interface GradientType {
  [k: number]: GradientInfo;
}
interface Gradients {
  [k: number]: GradientType;
}

const GRADIENTS: Gradients = {
  [TimeOfDay.Day]: {
    [ObjectType.mountains]: {
      degrees: 180,
      from: {
        red: [195, 255],
        green: [235, 255],
        blue: [240, 255],
      },
      to: {
        red: [110, 150],
        green: [195, 215],
        blue: [230, 255],
      },
    },
  },
  [TimeOfDay.Twilight]: {
    [ObjectType.buildings]: {
      degrees: 180,
      from: {
        red: [21, 160],
        green: [45, 75],
        blue: [79, 119],
      },
      to: {
        red: [225, 245],
        green: [136, 196],
        blue: [94, 204],
      },
    },
    [ObjectType.mountains]: {
      degrees: -5,
      from: {
        red: [235, 255],
        green: [220, 235],
        blue: [90, 130],
      },
      to: {
        red: [230, 255],
        green: [110, 125],
        blue: [142, 162],
      },
    },
  },
  [TimeOfDay.Night]: {
    [ObjectType.buildings]: {
      degrees: 180,
      from: {
        red: [0, 40],
        green: [20, 30],
        blue: [30, 100],
      },
      to: {
        red: [10, 75],
        green: [80, 100],
        blue: [120, 170],
      },
    },
    [ObjectType.mountains]: {
      degrees: 180,
      from: {
        red: [0, 40],
        green: [20, 30],
        blue: [30, 100],
      },
      to: {
        red: [10, 75],
        green: [80, 100],
        blue: [120, 170],
      },
    },
  },
};

export default GRADIENTS;
