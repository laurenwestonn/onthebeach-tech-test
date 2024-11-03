import './App.css';
import { useEffect, useState } from 'react';
import { getHotels } from './api';

function App() {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {  
    getHotels()
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => console.log(err));
  }, []);

  return (
    Hotels
  );
}

export default App;
