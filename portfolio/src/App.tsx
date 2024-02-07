import './App.css';
import { Nav } from './components/Nav';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import miniMinecraftData from "./_data/Portfolio/MiniMinecraft/miniMinecraft";
import racingGameData from "./_data/Portfolio/RacingGame/racingGame";
import sonsOfRaData from './_data/Portfolio/SonsOfRa/sonsOfRa'

import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { PortfolioPage } from './pages/Portfolio/PortfolioPage';

function App() {
  const head = document.head;
  if (!document.getElementById("urbanist-font")) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css?family=Urbanist";
    link.id = "urbanist-font"
    head.append(link);
  }

  return (
    <div className="App min-h-screen h-full w-full bg-zinc-700">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path='/About' element={<About/>} />
          <Route path='/Portfolio/SonsOfRa' element={<PortfolioPage data={sonsOfRaData}/>} />
          <Route path='/Portfolio/RacingGame' element={<PortfolioPage data={racingGameData}/>} />
          <Route path='/Portfolio/MiniMinecraft' element={<PortfolioPage data={miniMinecraftData}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
