import React, { useEffect } from "react";
import PackageSummary from "./PackageSummary.tsx";
import { PackageType } from "./types/PackageTypes.tsx";


function PackageCard(props: PackageType) {
    return (
        <div key={props.resort.id}>
            <img src={props.resort.image.url} alt={props.resort.image.description} />
            <PackageSummary 
                resortName={props.resort.name}
                location={`${props.resort.regionName}, ${props.resort.countryName}`}
                rating={props.resort.starRating}
                travellers={props.bookingDetails.party}
                startDate={props.flightDetails.departureDate}
                numberOfDays={props.bookingDetails.lengthOfStay}
                airportName={props.flightDetails.departureAirport}
                price={props.bookingDetails.price}
            />
            <p>{props.resort.overview}</p>
        </div>
    );
}

export default PackageCard;