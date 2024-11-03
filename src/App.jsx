import './css/packages.css';
import { useEffect, useState } from 'react';
import { getPackages } from './api';
import Sort from './components/Sort.tsx';
import Packages from './components/Packages.tsx';

function App() {
  const [packagesData, setPackagesData] = useState([]);
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {  
    getPackages()
      .then(res => res.json())
      .then(data => {
        setPackagesData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError('Failed to load packages');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <a className="skip" href="#main">Skip to main content</a>      
      <main id="main" className="packages">
        <Sort sort={sort} setSort={setSort}/>
        <Packages sort={sort} packages={packagesData}/>
      </main>
  </>
  );
}

export default App;
