import React from "react";
import Hotel from "./Hotel.tsx";

type HotelsListType = {
    hotels: any[]
}

function HotelsList(props: HotelsListType) {
    return (
        <div>
            <h1>Hotels</h1>
            {props.hotels.map(hotel => 
                <Hotel resort={hotel.resort}/>
            )}
        </div>
    )
}

export default HotelsList;