import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrownserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="todo-app">
      <Home />
    </div>
  );
}

export default App;
