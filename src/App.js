import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Sobrenos from './pages/Sobrenos';

function App() {
  return (
    <div classeName='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Cadastro" element={<Cadastro />}/>
          <Route path="/Sobrenos" element={<Sobrenos />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
