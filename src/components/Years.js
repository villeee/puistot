import React from "react";

const Years = ({ data }) => {
  // Luodaan JSON:sta Key-value -objekti ('vuosi': 'puistojen määrä')
  function mapToProp(data, prop) {
    return data.reduce(
      (res, item) =>
        Object.assign(res, {
          [item[prop]]: 1 + (res[item[prop]] || 0),
        }),
      Object.create(null)
    );
  }
  const parkYear = mapToProp(data, "vuosi");
  const chart = [];

  // Tehdään kuvaaja Key-value -objektin ('vuosi': 'puistojen määrä') perusteella
  for (const [key, value] of Object.entries(parkYear)) {
    // console.log(`${key}: ${value}`);
    chart.push(
      <>
        <div className="flex-container">
          <div key={key}>{key}</div>
          <div className="bar" style={{ width: `${value * 10}px` }}></div>
          <div key={value}>{value}</div>
        </div>
      </>
    );
  }
  //console.log(chart);

  return (
    <>
      <h6>PERUSTAMISVUODET</h6>
      <div className="chart-years">{chart}</div>
      <p style={{ paddingLeft: "20px" }}>
        1980-luvun alun jälkeen kansallispuistoja on perustettu tasaiseen
        tahtiin.
      </p>
    </>
  );
};

export default Years;
