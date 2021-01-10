import { FC, useRef, useReducer } from 'react';
import { AudioFeature } from './Home';
import Moon from './Moon';
import Sliders from './Sliders';
import Sun from './Sun';
import House from './House';
import Mountain from './Mountain';
import Tree from './Tree2';
import useGeneratedScene from './hooks/useGeneratedScene';
import useRect from './hooks/useRect';
import getTimeOfDay from './utils/getTimeOfDay';
import { reducer } from './reducers';

import { ObjectType, TimeOfDay } from './enums';
import { BuildingsMetaData } from './utils/generateBuildings';
import { MountainsMetaData } from './utils/generateMountains';

import './Playground.scss';

const CityEditor: FC<{ audioFeatures: AudioFeature }> = ({ audioFeatures }) => {
  const [state, dispatch] = useReducer(reducer, audioFeatures);
  const { tempo, type, valence } = state;
  const timeOfDay = getTimeOfDay(valence);

  const sunRef = useRef<HTMLElement>(null);
  const moonRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);

  const wrapperRect = useRect(wrapperRef, {
    type,
    timeOfDay,
    tempo,
    valence,
  });
  const moonRect = useRect(moonRef, {
    type,
    timeOfDay,
    tempo,
    valence,
  });
  const sunRect = useRect(sunRef, {
    type,
    timeOfDay,
    tempo,
    valence,
  });

  const {
    gradient,
    groundColor,
    objectsToRender,
    treesToRender,
    shadowsToRender,
    planetOverrides,
    starsToRender,
    lightsToRender,
  } = useGeneratedScene({ type, timeOfDay, tempo, valence });

  const styles = {
    background: gradient,
  };
  const groundStyles = {
    background: groundColor,
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Sliders state={state} dispatch={dispatch} />
      <div>
        TYPE: {type === ObjectType.buildings ? 'buildings' : 'mountains'}
      </div>
      <div>Time Of Day: {timeOfDay}</div>
      <div
        ref={wrapperRef as any}
        className={`playground ${timeOfDay === TimeOfDay.Day ? 'day' : ''}`}
        style={styles}
      >
        {timeOfDay === TimeOfDay.Night && (
          <Moon ref={moonRef as any} styles={planetOverrides} />
        )}
        {timeOfDay !== TimeOfDay.Night && type === ObjectType.mountains && (
          <Sun ref={sunRef as any} styles={planetOverrides} />
        )}
        {starsToRender}
        <div className="ground-wrapper">
          <div className="ground" style={groundStyles}>
            {type === ObjectType.buildings && (
              <>
                {lightsToRender}
                {(objectsToRender as BuildingsMetaData[]).map(
                  (objectToRender: BuildingsMetaData, i: number) => {
                    if (!objectToRender.wallColor) return null;
                    return <House key={`house-${i}`} {...objectToRender} />;
                  }
                )}
                {treesToRender.map((treeToRender, i) => {
                  return <Tree key={`tree-${i}`} {...treeToRender} />;
                })}
              </>
            )}

            {type === ObjectType.mountains && (
              <>
                {(objectsToRender as MountainsMetaData[]).map(
                  (objectToRender: MountainsMetaData, i: number) => {
                    if (!objectToRender.height) return null;
                    return (
                      <Mountain
                        key={`mountain-${i}`}
                        moonRect={moonRect}
                        sunRect={sunRect}
                        wrapperRect={wrapperRect}
                        timeOfDay={timeOfDay}
                        {...objectToRender}
                      />
                    );
                  }
                )}
              </>
            )}
            {shadowsToRender.map((_, i) => {
              const shadowStyle = {};
              return <div key={`shadow-${i}`} style={shadowStyle} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityEditor;

