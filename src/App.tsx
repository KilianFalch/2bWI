import Card from "./components/Card";
import CardContainer from "./components/CardContainer";
import Football from "./components/Football";
import FootballContainer from "./components/FootballContainer";
import Gaming from "./components/Gaming";
import GamingContainer from "./components/GamingContainer";

function App() {
  return (
    <>
      <h1>Willkommen</h1>
      <div className="card-container"></div>
      <CardContainer />
     
      <div className="football-container">
        <FootballContainer   />
    
      </div>

      <div className="gamingcontainer">
        <GamingContainer />
      
      </div>
    </>
  );
}

export default App;
