import './App.css';
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
    <div className='packages'>
      {packagesData.map(packageData => 
          <PackageCard
              key={packageData.resort.id}
              resort={packageData.resort}
              flightDetails={packageData.flightDetails}
              bookingDetails={packageData.bookingDetails}
          />
      )}
  </div>
  );
}

export default App;
