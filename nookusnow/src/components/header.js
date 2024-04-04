import React from 'react'

const Navigationbar = () => {
  return (
    <>
       <nav className="bg-white">
      <div className="container mx-auto px-4">
        <div>
          <h1 className='font-bold text-red-500'>BookUsNow </h1>
        </div>
        <div className='px-5 '>
          <a href='Mumbai,India' className='text-black'>Mumbai, India </a>
        </div>
        <div className='flex justify-center space-x-2'> 
          <button className=' text-white bg-black px-4 py-2 rounded-md cursor-pointer'>Categories</button> 
          <input className="px-20 py-1 border-black "type='search' placeholder='Search'/> 
        </div>
        <div className="flex justify-center space-x-10">
            <a href="#Live Shows" className="text-black">Live Shows</a>
            <a href="#Streams" className="text-black">Streams</a>
            <a href="#services" className="text-black">Movies</a>
            <a href="#Plays" className="text-black">Plays</a>
            <a href="#Events" className="text-black">Events</a>
            <a href="#Sports" className="text-black">Sports</a>
            <a href="#Activites" className="text-black">Activites</a>
          </div>
          <div className='flex justify-end space-x-5 px-15 '>
            <h1>Favourites</h1>
            <button>Sign In</button>
          </div>
        </div>
    </nav>
    </>

  )
}

export default Navigationbar;
