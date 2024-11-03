import './App.css';
import { useEffect, useState } from 'react';
import { getPackages } from './api';
import Packages from './components/Packages.tsx';

function App() {

  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {  
    getPackages()
      .then(res => res.json())
      .then(data => setPackagesData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Packages packagesData={packagesData}/>
  );
}

export default App;
