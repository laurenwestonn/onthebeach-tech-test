import './css/packages.css';
import { useEffect, useState } from 'react';
import { getPackages } from './api';
import Sort from './components/Sort.tsx';
import Packages from './components/Packages.tsx';

function App() {
  const [packagesData, setPackagesData] = useState([]);
  const [sort, setSort] = useState('');

  useEffect(() => {  
    getPackages()
      .then(res => res.json())
      .then(data => setPackagesData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to main content</a>      
      <main id="main" className="packages">
        <Sort setSort={setSort}/>
        <Packages sort={sort} packages={packagesData}/>
      </main>
  </>
  );
}

export default App;
