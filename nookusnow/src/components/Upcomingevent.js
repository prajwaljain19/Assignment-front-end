import React from 'react'
import { useState,useEffect,useRef } from 'react'
import { Upcoming_API } from '../utils/constants'
import axios from 'axios'
import Eventcard from './Eventcard'


const Upcomingevent = () => {
    const [events, setevents] = useState([]);
    const [loading, setloading] = useState(false);
    const pagesRef = useRef(1);

    const fetchevenet = async() => {

        try {
        setloading(true);
        const response = await axios.get(Upcoming_API);
        if(response.data && response.data.events) {
            setevents(preEvents => [...preEvents, ...response.data.events]);
            pagesRef.current++;
        } else {
            console.log('Invalid response');
        }
        } catch(err) {
            console.log(err);
        } finally {
            setloading(false);
        }
    };

    const scrollhandle = () => {
        
    }

  return (
    <div>
      <h1 className='text-3xl'>upcoming event</h1>
    </div>
  )
}
console.log(Upcoming_API);

export default Upcomingevent
