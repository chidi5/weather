import React from 'react'
import WeatherIcon from './WeatherIcon';

function ForecastItem({ setInitial, index, setActive, isActive, dt, weather, humidity }) {

    const unixTimestamp = dt;
    const milliseconds = unixTimestamp * 1000;

    const date = new Date(milliseconds);
    const isToday = date.toDateString() === new Date().toDateString();

    const monthDay = date.toLocaleString('default', { month: 'short', day: '2-digit' });

    const { id } = weather[0];

    const getIndex = (i)=> ()=> {
        setActive(i)
        setInitial(i)
    }

    return (
        <button key={index} className={'forecast-item ' + (isActive ? 'active' : '')} onClick={getIndex(index)} >
            <p className='capitalize'>{isToday ? 'today' : monthDay}</p>
            <div className='inline-block'>
                <WeatherIcon id={id} size='3em' className='mr-0' />
            </div>
            <p>Humidity</p>
            <p>{humidity}%</p>
        </button>
    )
}


export default ForecastItem