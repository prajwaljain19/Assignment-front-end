import React from 'react'
import BannerImage from './Banner.png'; 

const Homepage = () => {
  return (
    <div>
       <div className="relative">
        <img className="w-full" src={BannerImage} alt="Banner" />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Use a div for styling and structuring */}
          <div className="text-white text-center">
            <h1 className="text-6xl">Discover Exciting Events Happening<br />Near You - Stay Tuned For Updates!</h1>
            <p className='text-lg pt-7 px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Homepage;
