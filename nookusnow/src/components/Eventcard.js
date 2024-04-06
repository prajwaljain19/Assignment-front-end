import React from "react";

const Eventcard = ({event}) => {
    return (
        <div>
            <h3>{event.entName}</h3>
            <p>City: {event.cityName}</p>
            <p>{event.weather}</p>
            <p>Date: {event.date}</p>
            <img src = {event.imgUrl} alt="image" />
            <p>Distance: {event.distanceKm}</p>

        </div>
    )
};

export default Eventcard;