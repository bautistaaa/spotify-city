import {
  ENERGY_CHANGED,
  VALENCE_CHANGED,
  TEMPO_CHANGED,
  KEY_CHANGED,
  TYPE_CHANGED,
  Action,
} from './reducers';

const Sliders = ({
  state,
  dispatch,
}: {
  state: any;
  dispatch: React.Dispatch<Action>;
}) => {
  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="1"
          value={state.type}
          onChange={(e) =>
            dispatch({ type: TYPE_CHANGED, payload: +e.currentTarget.value })
          }
        />
        <label>TYPE: {state.type}</label>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="1"
          step=".1"
          value={state.energy}
          onChange={(e) =>
            dispatch({ type: ENERGY_CHANGED, payload: +e.currentTarget.value })
          }
        />
        <label>Energy: {state.energy}</label>
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="11"
          value={state.key}
          onChange={(e) =>
            dispatch({ type: KEY_CHANGED, payload: +e.currentTarget.value })
          }
        />
        <label>Key: {state.key}</label>
      </div>
      <div>
        <input
          type="range"
          min="20"
          max="400"
          value={state.tempo}
          onChange={(e) =>
            dispatch({ type: TEMPO_CHANGED, payload: +e.currentTarget.value })
          }
        />
        <label>Tempo: {state.tempo}</label>
      </div>
      <div>
        <input
          type="range"
          min="0"
          step=".1"
          max="1"
          value={state.valence}
          onChange={(e) =>
            dispatch({ type: VALENCE_CHANGED, payload: +e.currentTarget.value })
          }
        />
        <label>Valence: {state.valence}</label>
      </div>
    </>
  );
};

export default Sliders;
