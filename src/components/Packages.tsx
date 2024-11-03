import React, { useEffect } from "react";
import PackageCard from "./PackageCard.tsx";

function Packages(props) {

    useEffect(() => {
      console.log(props.sort);
    },[props.sort]);

    return (         
        <div className="packages">
        {props.packages.map(packageData => 
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