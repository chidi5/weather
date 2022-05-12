import React, { useState } from 'react'
import ForecastItem from './ForecastItem'


function Forecast({
  weatherData,
  setWeatherData,
  setInitial
}) {
  
  const [active, setActive] = useState(0);

  return (
    <div className='flex items-center mt-6 md:mt-10 lg:mt-6 overflow-auto whitespace-nowrap no-scrollbar'>
      {weatherData.map((weather, i) => <ForecastItem setInitial={setInitial} index={i} setActive={setActive} isActive={ active === i } key={weather.dt} {...weather} />)}
    </div>
  )
}

export default Forecast