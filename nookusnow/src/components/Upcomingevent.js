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
            // setevents(preEvents => [...preEvents, ...response.data.events]);
            setevents(response.data.events);
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
        const { scrolltop, clientheight, scrollheight } = document.documentElement;
        if(scrolltop + clientheight >= scrollheight - 20) {
            fetchevenet();
        }
    };

    useEffect(() => {
        fetchevenet();

        window.addEventListener('scroll', scrollhandle);
        return () => {
            window.removeEventListener('scroll', scrollhandle);
        };
    }, []);

  return (
    <div className='container mx-auto my-8'>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            events.map((event, index) => (
            <Eventcard key={index} event={event} />
            ))
        }
       </div>
       {loading && <div className="text-center mt-4">Loading...</div>}
    </div>
  )
}
console.log(Upcoming_API);

export default Upcomingevent;
