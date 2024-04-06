import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Recommended_API } from "../utils/constants";
import img from "./images/first.png";

const Recommendedshow = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchRecommendedShow = async () => {
      try {
        const response = await axios.get(Recommended_API);
        if (response.data && response.data.events) {
          setEvents(response.data.events);
        } else {
          console.log('Invalid response');
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecommendedShow();
  }, []);
  console.log(Recommended_API);

  return (
    <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center">
      <button className="px-4 py-2 bg-gray-200 rounded-l-lg">&lt;</button>
    </div>
    <div className="absolute inset-y-0 right-0 flex items-center">
      <button className="px-4 py-2 bg-gray-200 rounded-r-lg">&gt;</button>
    </div>
    <div className="overflow-x-auto whitespace-nowrap" style={{ overflow: 'hidden', cursor: 'grab' }}>
      {events.map((event, index) => (
        <div key={index} className="inline-block px-4 py-2 mr-2 bg-gray-200 rounded-lg">
          <h3>{event.entName}</h3>
          {event.img_url && <img src={event.img_url} alt={event.entName} style={{ width: '350px', height: '200px' }} />}
          <p>City: {event.cityName}</p>
          <p>{event.weather}</p>
          <p>Date: {event.date}</p>
          <p>Distance: {event.distanceKm}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Recommendedshow;
