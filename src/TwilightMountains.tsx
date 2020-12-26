import './TwilightMountains.scss';

const TwilightMountains = () => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Twilight Mountains</h3>
      <div id="wrap">
        <div className="moon"></div>
        <div className="ground-wrapper">
          <div className="mountain-wrapper">
            <div className="mountain">
              <div className="shade"></div>
            </div>
          </div>
          <div className="mountain-2-wrapper">
            <div className="mountain-2">
              <div className="shade-2"></div>
            </div>
          </div>
          <div className="mountain-3-wrapper">
            <div className="mountain-3">
              <div className="shade-3"></div>
            </div>
          </div>
          <div className="ground">
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwilightMountains;
