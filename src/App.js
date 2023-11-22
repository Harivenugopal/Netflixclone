import React from 'react'
import Navbar from './components/navbar/Navbar'
import './app.css'
import Banner from './Banner/Banner';
import Rowpost from './components/Rowpost/Rowpost';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost/>
    </div>
  );
}

export default App;
