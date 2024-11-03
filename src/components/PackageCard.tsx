import React from "react";
import PackageSummary from "./PackageSummary.tsx";

function PackageCard({ resort, bookingDetails, flightDetails}) {
    return (
        <div key={resort.id}>
            <div className="row">
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
            </div>
            <p className="container">
                <h3>Overview</h3>
                {resort.overview}
            </p>
        </div>
    );
}

export default PackageCard;