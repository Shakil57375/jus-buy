import React from 'react'
import Title from '../custom/Title'

const NewArrival = () => {
  return (
    <div>
        <div className='flex items-end justify-between mb-5'>
            <Title title={"This Month"} subtitle={"New Arrival"}/>
            <button className='px-8 py-4 bg-orange-500 rounded text-white'>View all</button>
        </div>
    </div>
  )
}

export default NewArrival