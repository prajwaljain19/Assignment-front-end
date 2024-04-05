import React from "react";
import { useState,useEffect } from "react";
import { Upcoming_API } from "../utils/constants";
import axios from 'axios';
import image from './images/first.png';

const Recommendedshow = () => {

  const [events, setevents] = useState([]);

  useEffect(() => {
    console.log(Upcoming_API);
    const fetchrecommendedshow = async () => {
      try {
      const response = await axios.get(Upcoming_API);
      if(response.data &&  response.data.events) {
        setevents(response.data.events);
      } else {
        console.log('invalid response');
      }
      
       } catch (err) {
      console.log(err);
    }
  };

  fetchrecommendedshow();
  }, []);

  return (
    <div className="relative top-[-2rem] flex space-x-2">
    {
      events.map((event, index) => (
        <div key={index} >
          <h3>{event.entName}</h3>
          <img src={image} alt="img"  style={{ width: '800px', height: '200px' }} />
          <p>city: {event.cityName}</p>
          <p> date: {new Date(event.date).toLocaleDateString()}</p>
          <p>{event.distanceKm}</p>
        </div>
    ))}
    </div>
  )
}

export default Recommendedshow;
