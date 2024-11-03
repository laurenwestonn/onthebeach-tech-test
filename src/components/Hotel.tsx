import React from "react";

type ResortType = {
    name: string;
};

type HotelType = {
    resort: ResortType
};

function Hotel(props: HotelType) {
    return (
        <div>
            <h2>{props.resort.name}</h2>
        </div>
    )
}

export default Hotel;