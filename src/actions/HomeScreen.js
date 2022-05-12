import useIsMounted from 'ismounted'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listWeather } from '../actions/weather'
import Forecast from '../components/Forecast'
import Form from '../components/Form'
import Temperature from '../components/Temperature'
import WeatherBox from '../components/WeatherBox'

function HomeScreen() {
    const [ city, setCity ] = useState('')
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [initial, setInitial] = useState(0);
    const [weatherToday, setWeatherToday] = useState();
    const [weatherData, setWeatherData] = useState([]);

    const dispatch = useDispatch()

    const weatherList = useSelector(state => state.weatherList)
    const { loading, weather } = weatherList

    useEffect(() => {
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
    
        navigator.geolocation.getCurrentPosition(onPositionReceived, (err) => { }, options)
    }, [])
    
    useEffect(() => {
        if(lat && long)
        dispatch(listWeather(lat, long))

    }, [dispatch, lat, long]);
    
    const onPositionReceived = async (pos) => {
        const crds = pos.coords;
        setLat(crds.latitude);
        setLong(crds.longitude);
    }

    const isMounted = useIsMounted();

    useEffect(() => {
        if(loading === false && isMounted.current) {
            setWeatherData(weather.daily);
            if(weatherData.length !== 0) {
                setWeatherToday({
                    id: weather.current.weather[0].id,
                    descp: weather.current.weather[0].description,
                    temp: weather.current.temp - 273.15,
                    city: weatherData[0].name,
                    humidity: weather.current.humidity,
                    wind: weather.current.wind_speed,
                    icon: weather.current.weather[0].icon
                })
            }
        }

    }, [weather, weatherData, isMounted, loading]);

    return (
        <div className='relative shadow-md bg-white border-transparent rounded-md m-auto p-10 w-[90%] inset-y-10'>
            <div className="grid grid-cols-12 gap-6">
                <div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5'>
                    <div className='py-5'>
                        <Form city={city} setCity={setCity} lat={lat} setLat={setLat} long={long} setLong={setLong} />
                        <WeatherBox weather={weatherToday} loading={loading} />
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7'>
                    <div className='py-5'>
                        {weatherData.length !== 0 && <Temperature {...weatherData[initial].temp} />}
                        <Forecast weatherData={weatherData} setWeatherData={setWeatherData} setInitial={setInitial} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen