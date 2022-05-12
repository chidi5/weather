import axios from "axios"
import {
    WEATHER_LIST_REQUEST,
    WEATHER_LIST_SUCCESS,
    WEATHER_LIST_FAIL,
    
} from './types.js'

export const listWeather = (lat, long) => async (dispatch) => {
    
    try {
        dispatch({ type: WEATHER_LIST_REQUEST })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.get(
            `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`,
            config
        )

        dispatch({
            type: WEATHER_LIST_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: WEATHER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}