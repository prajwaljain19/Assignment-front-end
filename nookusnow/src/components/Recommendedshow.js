import React from "react";
import { useState,useEffect } from "react";
import { Upcoming_API } from "../utils/constants";
import axios from 'axios';

const Recommendedshow = () => {

  const [show, setshow] = useState([]);

  useEffect(() => {

    const fetchrecommendedshow = async () => {
      try {
      const response = await axios.get(Upcoming_API);
      setshow(response.data.results);
       } catch (err) {
      console.log(err);
    }
  };

  fetchrecommendedshow();
  }, []);

  return (
    <>
    <h2>Recommendedshow shows</h2>
    </>
  )
}

export default Recommendedshow;
