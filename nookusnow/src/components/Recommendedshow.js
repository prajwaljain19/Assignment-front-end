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
  // console.log(Recommended_API);

  return (
    <div className="overflow-x-auto">
      <div className="flex space-x-2">
        {events.map((event, index) => (
          <div key={index}>
            <h3>{event.entName}</h3>
            <img src={img} alt="Image" style={{ width: '700px', height: '200px' }} />
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
