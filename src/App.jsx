import './css/packages.css';
import { useEffect, useState } from 'react';
import { getPackages } from './api';
import PackageCard from './components/PackageCard.tsx';

function App() {

  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {  
    getPackages()
      .then(res => res.json())
      .then(data => setPackagesData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to main content</a>      
      {packagesData.map(packageData => 
        <main id="main" className="packages">
            <PackageCard
                key={packageData.resort.id}
                resort={packageData.resort}
                flightDetails={packageData.flightDetails}
                bookingDetails={packageData.bookingDetails}
            />
        </main>
      )}
  </>
  );
}

export default App;
