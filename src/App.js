import "./App.css";
import Years from "./components/Years";
import Finland from "./components/Finland";
import Parks from "./components/Parks";

function App() {
  const data = [
    {
      puisto: "Lemmenjoki",
      ala: 2860,
      vuosi: 1956,
    },
    {
      puisto: "Oulanka",
      ala: 290,
      vuosi: 1956,
    },
    {
      puisto: "Linnansaari",
      ala: 97,
      vuosi: 1956,
    },
    {
      puisto: "Liesjärvi",
      ala: 22,
      vuosi: 1956,
    },
    {
      puisto: "Pyhä-Häkki",
      ala: 13,
      vuosi: 1956,
    },
    {
      puisto: "Rokua",
      ala: 9,
      vuosi: 1956,
    },
    {
      puisto: "Petkeljärvi",
      ala: 6,
      vuosi: 1956,
    },
    {
      puisto: "Patvinsuo",
      ala: 105,
      vuosi: 1982,
    },
    {
      puisto: "Riisitunturi",
      ala: 77,
      vuosi: 1982,
    },
    {
      puisto: "Salamajärvi",
      ala: 65,
      vuosi: 1982,
    },
    {
      puisto: "Kauhaneva–Pohjankangas",
      ala: 57,
      vuosi: 1982,
    },
    {
      puisto: "Lauhanvuori",
      ala: 53,
      vuosi: 1982,
    },
    {
      puisto: "Helvetinjärvi",
      ala: 50,
      vuosi: 1982,
    },
    {
      puisto: "Seitseminen",
      ala: 46,
      vuosi: 1982,
    },
    {
      puisto: "Hiidenportti",
      ala: 45,
      vuosi: 1982,
    },
    {
      puisto: "Tiilikkajärvi",
      ala: 34,
      vuosi: 1982,
    },
    {
      puisto: "Isojärvi",
      ala: 22,
      vuosi: 1982,
    },
    {
      puisto: "Itäinen Suomenlahti",
      ala: 7,
      vuosi: 1982,
    },
    {
      puisto: "Urho Kekkonen",
      ala: 2550,
      vuosi: 1983,
    },
    {
      puisto: "Saaristomeri",
      ala: 500,
      vuosi: 1983,
    },
    {
      puisto: "Tammisaaren saaristo",
      ala: 52,
      vuosi: 1989,
    },
    {
      puisto: "Kolovesi",
      ala: 60,
      vuosi: 1990,
    },
    {
      puisto: "Torronsuo",
      ala: 30,
      vuosi: 1990,
    },
    {
      puisto: "Perämeri",
      ala: 157,
      vuosi: 1991,
    },
    {
      puisto: "Koli",
      ala: 30,
      vuosi: 1991,
    },
    {
      puisto: "Puurijärvi-Isosuo",
      ala: 27,
      vuosi: 1993,
    },
    {
      puisto: "Päijänne",
      ala: 14,
      vuosi: 1993,
    },
    {
      puisto: "Nuuksio",
      ala: 55,
      vuosi: 1994,
    },
    {
      puisto: "Valkmusa",
      ala: 19,
      vuosi: 1996,
    },
    {
      puisto: "Kurjenrahka",
      ala: 29,
      vuosi: 1998,
    },
    {
      puisto: "Syöte",
      ala: 299,
      vuosi: 2000,
    },
    {
      puisto: "Leivonmäki",
      ala: 31,
      vuosi: 2003,
    },
    {
      puisto: "Repovesi",
      ala: 15,
      vuosi: 2003,
    },
    {
      puisto: "Pallas–Ylläs",
      ala: 1020,
      vuosi: 2005,
    },
    {
      puisto: "Pyhä-Luosto",
      ala: 142,
      vuosi: 2005,
    },
    {
      puisto: "Selkämeri",
      ala: 940,
      vuosi: 2011,
    },
    {
      puisto: "Sipoonkorpi",
      ala: 19,
      vuosi: 2011,
    },
    {
      puisto: "Etelä-Konnevesi",
      ala: 16,
      vuosi: 2014,
    },
    {
      puisto: "Teijo",
      ala: 34,
      vuosi: 2015,
    },
    {
      puisto: "Hossa",
      ala: 110,
      vuosi: 2017,
    },
  ];

  return (
    <>
      <div class="container">
        <h3
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          Kansallispuistot
        </h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <Years data={data} />
          </div>
          <div class="col">
            <Finland data={data} />
          </div>
        </div>
      </div>
      <div className="container">
        <Parks data={data} />
        <p
          style={{
            marginLeft: "20px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          Lähde:{" "}
          <a
            href="https://www.metsa.fi/maat-ja-vedet/suojelualueet/kansallispuistot/kansallispuistotaulukot/"
            target="_blank"
          >
            Metsähallitus
          </a>
        </p>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: "#eee",
          paddingTop: "15px",
          paddingBottom: "15px",
          marginBottom: "40px",
        }}
      >
        <h3>Huomioita tehtävän toteutuksesta</h3>
        <p style={{ fontSize: "1rem" }}>
          SVG-ympyrän toiminnan mystisyydestä johtuen Kansallispuistot-osion ja
          Osuus Suomen pinta-alasta -osion pallukat eivät ole suhteessa
          keskenään. Toisin sanoen kokovertailut toimivat vain osioiden
          sisäisesti.
        </p>
        <br></br>
        <h5>Interaktiivinen konsepti</h5>
        <p style={{ fontSize: "1rem" }}>
          Tästä voisi tehdä myös aikajanallisen vuorovaikutteisen version, jossa
          scrollaamalla pinta-ala-pallukka alkaa kasvaa sitä mukaa kun uusia
          puistoja perustetaan 1956 alkaen. Pallukka kasvaisi lopulta
          yhteispinta-alan suuruiseksi ja sitten se suhteutettaisiin tuohon
          Suomen pinta-ala-pallukkaan. Scrollatessa lueteltaisiin puistojen
          nimet ja koot. Vuodet voisivat rullata siinä sivussa ja
          Perustamisvuodet-kuvaaja voisi rakentua siinä samalla.
        </p>
      </div>
    </>
  );
}

export default App;
