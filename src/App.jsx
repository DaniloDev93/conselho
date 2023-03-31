import './App.css'

import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {

  const [conselho, setConselho] = useState([]);

  const getConselho = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data.slip;
      setConselho(data);
      console.log(conselho);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }

  useEffect(() => {
    getConselho();
},[])

  

  return (
    <div className="App">
      <div className="container">
        <p>conselho #{conselho.id}</p>
        <h2>{conselho.advice}</h2>
        <button onClick={getConselho}>novo conselho</button>
      </div>
    </div>
  )
}

export default App
