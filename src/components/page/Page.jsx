import React from 'react'
import bg from '../../assets'
import './Page.css'
import Location from '../location/Location'
import Weather from '../weather/Weather'
import Forecast from '../forecast/Forecast'

const Page = () => {
  return (
    <div className="p_bg">
        <Location />
        <Weather />
        <Forecast />
    </div>
  )
}

export default Page