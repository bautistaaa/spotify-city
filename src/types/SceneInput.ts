import { ObjectType, TimeOfDay } from '../enums';

export default interface SceneInput {
  type: ObjectType;
  timeOfDay: TimeOfDay;
  tempo: number;
  valence: number;
}
