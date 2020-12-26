import './DayMountains.scss';

const DayMountains = () => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Daytime Mountains</h3>
      <div id="day">
        <div className="sun"></div>
        <div className="ground-wrapper">
          <div className="mountain-biggest-wrapper">
            <div className="mountain-biggest">
              <div className="shade-biggest"></div>
            </div>
          </div>
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
            <div className="shadow-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DayMountains;
