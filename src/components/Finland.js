import React from "react";

const Finland = ({ data }) => {
  // Lasketaan yhteispinta-ala
  let areaParks = 0;
  for (var i = 0; i < data.length; i++) {
    areaParks = areaParks + data[i].ala;
  }

  // Yhteispinta-alan säde
  var rds = Math.sqrt(areaParks / Math.PI);

  return (
    <>
      <div className="chart-finland">
        <h6>OSUUS SUOMEN PINTA-ALASTA</h6>
        <div className="area-finland">
          <svg viewBox="0 0 80 60">
            <circle cx="30" cy="30" r="30" style={{ fill: "#181E26" }} />
            <circle
              cx="30"
              cy={30 * 2 - rds * 0.1}
              r={rds * 0.1}
              style={{ fill: "#FF007A" }}
            />
          </svg>
          <div className="flex-container" style={{ paddingTop: "20px" }}>
            <div className="bar" style={{ width: "15px" }}></div>{" "}
            <p>
              Kansallispuistojen yhteispinta-ala:{" "}
              <strong>{areaParks} km&sup2;</strong>.{" "}
            </p>
          </div>
          <div className="flex-container">
            <div
              className="bar"
              style={{ width: "15px", backgroundColor: "#181E26" }}
            ></div>
            <p>
              Suomen pinta-ala: <strong>338440 km&sup2;</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Finland;
