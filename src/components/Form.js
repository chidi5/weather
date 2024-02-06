import axios from 'axios'
import React from 'react'
//import { useDispatch } from 'react-redux'
//import { listWeather } from '../actions/weather'


function Form({
    city,
    setCity,
    lat,
    setLat,
    long,
    setLong
}) {
    //const dispatch = useDispatch()

    //convert city to Lat Long
    const apiCall = async (e) => {
        e.preventDefault()
        //const city = e.target.elements.city.value
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
        const res = await axios.get(url);
        setLat(res.data[0].lat)
        setLong(res.data[0].lon)

    }

    /*const submitRegHandler = (e) => {
        e.preventDefault()
        //apiCall()
        //dispatch(listWeather(city))
        console.log(lat, long)
    }*/

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            apiCall(e)
            //submitRegHandler(e);
        }
    }


    return (
        <form onSubmit={apiCall}>
            <label htmlFor="city" className="text-sm font-medium text-gray-700 hidden lg:inline">Your city </label>
            <input
                className="w-full lg:w-[170px] focus:ring-1 focus:outline-0 focus:ring-gray-500 focus:border-gray-500 focus:rounded-sm shadow-sm sm:text-sm border-gray-300 border p-1"
                type="text" 
                name="city"
                value={city}
                placeholder="Search for a city"
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <div className="relative h-11 w-full min-w-[200px]">
                <input placeholder="Search for a city"
                  className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                <label
                  className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Search for a city
                </label>
              </div>
        </form>
    )
}

export default Form
