import React, {useMemo} from "react";
import PackageCard from "./PackageCard.tsx";

function Packages(props) {
  const getSortedPackages = useMemo(() => {
    switch(props.sort) {
      case 'alphabetically':
          return [...props.packages].sort((a, b) => {
              return a.resort.name.localeCompare(b.resort.name);
          });
      case 'price':
          return [...props.packages].sort((a, b) => {
              return a.flightDetails.price - b.flightDetails.price;
          });
      case 'star rating':
          return [...props.packages].sort((a, b) => {
              return b.resort.starRating - a.resort.starRating;
          });
      default:
          return props.packages;
    }
  }, [props.packages, props.sort]);

  return (         
      <div className="packages">
      {getSortedPackages.map(packageData => 
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

export default Packages;