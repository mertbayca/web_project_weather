import React from 'react'
import bg from '../../assets'
import './Page.css'
import Location from '../location/Location'
import Weather from '../weather/Weather'
import Forecast from '../forecast/Forecast'

const Page = () => {
  return (
    <div class="bg-image">
    <div className="p_bg">
      <div className="p_tutorial">
       <h1>Enter a location in the format of city, country <span>&#40;</span>For example London,UK<span>&#41;</span></h1>
      </div>
        <Location />
        <Weather />
        <Forecast />
    </div>
    </div>
  )
}

export default Page