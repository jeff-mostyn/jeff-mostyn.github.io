import './App.css';
import { Nav } from './components/Nav';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

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
    <div className="App min-h-screen bg-zinc-700">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Portfolio' element={<Portfolio/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
