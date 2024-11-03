import React from "react";
import PackageCard from "./PackageCard.tsx";

type HotelsListType = {
    hotels: any[]
}

function HotelsList(props: HotelsListType) {
    return (
        <div>
            <h1>Hotels</h1>
            {props.hotels.map(packageData => 
                <PackageCard 
                    resort={packageData.resort}
                    flightDetails={packageData.flightDetails}
                    bookingDetails={packageData.bookingDetails}
                />
            )}
        </div>
    )
}

export default HotelsList;