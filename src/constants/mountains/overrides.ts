import { BorderType, Distance, TimeOfDay } from '../../enums';

export type Overrides = {
  [K in TimeOfDay]: {
    [K in Distance]: {
      [K in BorderType]?: {
        color: string;
        shade: string;
      };
    } & { zIndex: number };
  };
};
const OVERRIDES: Overrides = {
  [TimeOfDay.Day]: {
    [Distance.Closest]: {
      zIndex: 5,
      [BorderType.bottom]: {
        color: '#f9e9aa',
        shade: '#ad9e4c',
      },
    },
    [Distance.Close]: {
      zIndex: 4,
      [BorderType.bottom]: {
        color: '#f9e9aa',
        shade: '#ad9e4c',
      },
    },
    [Distance.Far]: {
      zIndex: 3,
      [BorderType.bottom]: {
        color: '#e3e2bd',
        shade: '#abab7b',
      },
    },
    [Distance.Farthest]: {
      zIndex: 2,
      [BorderType.bottom]: {
        color: '#ccdccf',
        shade: '#a4b7a4',
      },
    },
  },
  [TimeOfDay.Night]: {
    [Distance.Closest]: {
      zIndex: 5,
      [BorderType.bottom]: {
        color: '#8b8fab',
        shade: '#6e6a7b',
      },
    },
    [Distance.Close]: {
      zIndex: 4,
      [BorderType.bottom]: {
        color: '#8b8fab',
        shade: '#6e6a7b',
      },
    },
    [Distance.Far]: {
      zIndex: 3,
      [BorderType.bottom]: {
        color: '#7b81a5',
        shade: '#646582',
      },
    },
    [Distance.Farthest]: {
      zIndex: 2,
      [BorderType.bottom]: {
        color: '#6b73a0',
        shade: '#5b5f87',
      },
    },
  },
  [TimeOfDay.Twilight]: {
    [Distance.Closest]: {
      zIndex: 5,
      [BorderType.bottom]: {
        color: '#d4aba1',
        shade: '#77757c',
      },
    },
    [Distance.Close]: {
      zIndex: 4,
      [BorderType.bottom]: {
        color: '#d4aba1',
        shade: '#77757c',
      },
    },
    [Distance.Far]: {
      zIndex: 3,
      [BorderType.bottom]: {
        color: '#dbb499',
        shade: '#988b7d',
      },
    },
    [Distance.Farthest]: {
      zIndex: 2,
      [BorderType.bottom]: {
        color: '#e7bd8e',
        shade: '#bba37b',
      },
    },
  },
};

export default OVERRIDES;
