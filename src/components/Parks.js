import React from "react";

const Parks = ({ data }) => {
  return (
    <>
      <h6 style={{ marginTop: "20px" }}>KANSALLISPUISTOT</h6>
      <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Suomessa on 40 kansallispuistoa.
      </p>
      <div className="flex-container" style={{ paddingBottom: "20px" }}>
        <div className="bar" style={{ width: "15px" }}></div> <p>Pinta-ala</p>
      </div>
      <div className="flex-container" style={{ marginLeft: "10px" }}>
        {data.map((item, key) => {
          return (
            <>
              <div className="parks" key={key}>
                <strong>{item.puisto}</strong>
                <br></br>
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy={50}
                    r={Math.sqrt(item.ala / Math.PI)}
                    style={{ fill: "#FF007A" }}
                  />
                </svg>
                <br></br>
                {item.ala} km&sup2;
                <br></br>
                {item.vuosi}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Parks;
