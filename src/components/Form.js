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
                placeholder="London"
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </form>
    )
}

export default Form
