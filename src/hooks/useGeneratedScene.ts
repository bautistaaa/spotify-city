import { ObjectType, TimeOfDay } from '../enums';
import { useEffect, useState } from 'react';
import generateScene, { SceneInformation } from '../utils/generateScene';

type Input = {
  type: ObjectType;
  timeOfDay: TimeOfDay;
  tempo: number;
  valence: number;
};
const useGeneratedScene = ({
  type,
  timeOfDay,
  tempo,
  valence,
}: Input): SceneInformation => {
  const [state, setState] = useState<SceneInformation>({
    gradient: '',
    groundColor: '',
    objectsToRender: [],
    treesToRender: [],
    shadowsToRender: [],
  });

  useEffect(() => {
    const sceneInformation = generateScene(type, timeOfDay, tempo);
    setState(sceneInformation);
  }, [type, timeOfDay, tempo, valence]);

  return state;
};

export default useGeneratedScene;
