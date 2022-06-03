import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrownserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrownserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrownserRouter>
  );
}

export default App;
