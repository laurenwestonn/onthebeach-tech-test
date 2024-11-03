import React from 'react';
import { PackageSummaryType } from './types/PackageTypes';

function PackageSummary(props: PackageSummaryType) {
    return (
        <div className="container package-summary">
            {/* Todo handle possiblity of missing data */}
            <h2>{props.resortName}</h2>
            <p>{props.location}</p>
            <div>{"⭐".repeat(props.rating)}</div>
            {/* Todo: handle singular of days if only 1 day */}
            {/* Todo: format date */}
            <div>{props.startDate} for {props.numberOfDays} days departing from {props.airportName}</div>
            <button className="primary-btn" onClick={() => alert(`Book ${props.resortName}`)} aria-label={`Book ${props.resortName}`}>Book now</button>
        </div>);
}

export default PackageSummary;