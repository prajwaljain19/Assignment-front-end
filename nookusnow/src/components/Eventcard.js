import React from "react";
import image from './images/first.png';

const Eventcard = ({event}) => {
    return (
        <div>
             <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">{event.eventName}</h3>
      <img src={image} alt={event.eventName} className="w-full h-48 object-cover mt-2" />
      <p className="text-gray-600 mt-2">City: {event.cityName}</p>
      <p className="text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
      <p className="text-gray-600">Weather: {event.weather}</p>
      <p className="text-gray-600">Distance: {event.distanceKm} km</p>
    </div>
        </div>
    )
};

export default Eventcard;