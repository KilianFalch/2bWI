import CardContainer from "./components/CardContainer";
import FootballContainer from "./components/FootballContainer";
import GamingContainer from "./components/GamingContainer";
import TimContainer from "./components/TimContainer";

function App() {
  return (
    <>
      <h1>Willkommen</h1>
      <div className="card-container"></div>
      <CardContainer />

      <div className="football-container">
        <FootballContainer />
      </div>

      <div className="gamingcontainer">
        <GamingContainer />
      </div>

      <div className="timcontainer">
        <TimContainer />
      </div>
    </>
  );
}

export default App;
