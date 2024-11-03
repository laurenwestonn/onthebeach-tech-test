import React from "react";
import PackageCard from "./PackageCard.tsx";
import { PackagesType } from "./types/PackageTypes.tsx";

function Packages(props: PackagesType) {
    return (
        <div>
            {props.packagesData.map(packageData => 
                <PackageCard 
                    key={packageData.resort.id}
                    resort={packageData.resort}
                    flightDetails={packageData.flightDetails}
                    bookingDetails={packageData.bookingDetails}
                />
            )}
        </div>
    )
}

export default Packages;