import { FC, useReducer } from 'react';
import { AudioFeature } from './Home';
import Moon from './Moon';
import Sliders from './Sliders';
import Sun from './Sun';
import House from './House';
import Mountain from './Mountain';
import Tree from './Tree2';
import useGeneratedScene from './hooks/useGeneratedScene';
import useObjectCoordinates from './hooks/useObjectCoordinates';
import getRandomIntFromInterval from './utils/getRandomIntFromInterval';
import getTimeOfDay from './utils/getTimeOfDay';
import { reducer } from './reducers';

import './Playground.scss';
import { ObjectType, TimeOfDay } from './enums';

const Playground: FC<{ audioFeatures: AudioFeature }> = ({ audioFeatures }) => {
  const [state, dispatch] = useReducer(reducer, audioFeatures);
  const [moonRef, moonBounds] = useObjectCoordinates();
  const [sunRef, sunBounds] = useObjectCoordinates();
  const { tempo, type, valence } = state;
  const timeOfDay = getTimeOfDay(valence);
  const {
    gradient,
    groundColor,
    objectsToRender,
    treesToRender,
    shadowsToRender,
  } = useGeneratedScene({ type, timeOfDay, tempo, valence });

  const styles = {
    background: gradient,
  };
  const groundStyles = {
    background: groundColor,
  };
  const moonStyles = {
    left: `${getRandomIntFromInterval(0, 700)}px`,
    top: `${getRandomIntFromInterval(10, 100)}px`,
  };
  const sunStyles = {
    left: `${getRandomIntFromInterval(0, 700)}px`,
    top: `${getRandomIntFromInterval(10, 100)}px`,
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Sliders state={state} dispatch={dispatch} />
      <div>
        TYPE: {type === ObjectType.buildings ? 'buildings' : 'mountains'}
      </div>
      <div>Time Of Day: {timeOfDay}</div>
      <div
        className={`playground ${timeOfDay === TimeOfDay.Day ? 'day' : ''}`}
        style={styles}
      >
        {timeOfDay === TimeOfDay.Night && (
          <Moon ref={moonRef as any} styles={moonStyles} />
        )}
        {timeOfDay !== TimeOfDay.Night && type === ObjectType.mountains && (
          <Sun ref={sunRef as any} styles={sunStyles} />
        )}
        <div className="ground-wrapper">
          <div className="ground" style={groundStyles}>
            {type === ObjectType.buildings && (
              <>
                {objectsToRender.map((objectToRender, i) => {
                  if (!objectToRender.wallColor) return null;
                  return <House key={`house-${i}`} {...objectToRender} />;
                })}
                {treesToRender.map((treeToRender, i) => {
                  return <Tree key={`tree-${i}`} {...treeToRender} />;
                })}
              </>
            )}

            {type === ObjectType.mountains && (
              <>
                {objectsToRender.map((objectToRender, i) => {
                  if (objectToRender.wallColor) return null;
                  return (
                    <Mountain
                      key={`mountain-${i}`}
                      planetBounds={sunBounds}
                      {...objectToRender}
                    />
                  );
                })}
              </>
            )}
            {shadowsToRender.map((shadow, i) => {
              const shadowStyle = {};
              return <div key={`shadow-${i}`} style={shadowStyle} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
