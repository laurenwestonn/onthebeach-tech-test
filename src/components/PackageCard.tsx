import React from "react";
import PackageSummary from "./PackageSummary.tsx";

function PackageCard({ resort, bookingDetails, flightDetails}) {
    return (
        <div key={resort.id}>
            <img src={resort.image.url} alt={resort.image.description} />
            <PackageSummary 
                resortName={resort.name}
                location={`${resort.regionName}, ${resort.countryName}`}
                rating={resort.starRating}
                travellers={bookingDetails.party}
                startDate={flightDetails.departureDate}
                numberOfDays={bookingDetails.lengthOfStay}
                airportName={flightDetails.departureAirport}
                price={bookingDetails.price}
            />
            <p>{resort.overview}</p>
        </div>
    );
}

export default PackageCard;