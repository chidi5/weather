import React from 'react'
import CurrentDateTime from './CurrentDateTime'
import WeatherIcon from './WeatherIcon'

function WeatherBox({
  weather,
  loading
}) {
    return (
      <div>
        {loading ? (
          <div>Loading...</div>
        )
        : weather && 
          (
            <div className='mt-14 md:w-fit lg:w-fit'>
              <CurrentDateTime />

              <div className="flex justify-center">
                <div className='text-center'>
                  <div className="flex items-center mt-3">
                    <WeatherIcon id={weather.id} size='7em'/>
                    <p className='font-bold relative text-4xl ml-2'>
                      {weather.temp.toFixed(0)}
                      <span className='absolute'>°C</span>
                    </p>
                  </div>
                  <p className="font-semibold capitalize text-xl mt-3">
                      {weather.descp}
                  </p>
                </div>
              </div>

              <div className="flex mt-6">
                <div className="py-0 px-0">
                  <h5 className='text-gray-500 text-sm'>Humidity</h5>
                  <p className='text-sm text-center py-2'>{weather.humidity}%</p>
                </div>
                <div className="py-0 ml-auto">
                  <h5 className='text-gray-500 text-sm'>Wind speed</h5>
                  <p className='text-sm text-center py-2'>{weather.wind} km/j</p>
                </div>
              </div>

            </div>
          )
        }
      </div>
    )
}

export default WeatherBox