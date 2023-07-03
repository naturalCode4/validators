import logo from './logo.svg'
import React from 'react'
import './App.css'
import './Components/Description1'
import Head from './Components/Head'
import Description1 from './Components/Description1';
import Intake from './Components/Intake'
import Team from './Components/Team'

function App() {
  return (
    <div className="App">
      <Head/>
      <Description1/>
      <Intake/>
      <Team/>
    </div>
  );
}

export default App;
