import './App.css';
import Navbar from './components/navBar.js';
import HomeDisplay from './components/homeDisplay.js';
import ProjectOne from './components/projectOne.js';
import ProjectTwo from './components/projectTwo.js';
import ProjectThree from './components/projectThree.js';
import ProjectFour from './components/projectFour.js';

import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>

    <div className="App">
      <Navbar />
      <HomeDisplay />
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
    </div>
    
    </Router>
  );
} 

export default App;

// <ProjectOne />
// 