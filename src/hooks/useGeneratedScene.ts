import { useEffect, useState } from 'react';
import { SceneInput } from '../types';
import generateScene, { SceneInformation } from '../utils/generateScene';

const useGeneratedScene = ({
  type,
  timeOfDay,
  tempo,
  valence,
}: SceneInput): SceneInformation => {
  const [state, setState] = useState<SceneInformation>({
    gradient: '',
    groundColor: '',
    objectsToRender: [],
    treesToRender: [],
    shadowsToRender: [],
    planetOverrides: { top: '', left: '' },
  });

  useEffect(() => {
    const sceneInformation = generateScene(type, timeOfDay, tempo);
    setState(sceneInformation);
  }, [type, timeOfDay, tempo, valence]);

  return state;
};

export default useGeneratedScene;
