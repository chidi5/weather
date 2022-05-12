import {
    WEATHER_LIST_REQUEST,
    WEATHER_LIST_SUCCESS,
    WEATHER_LIST_FAIL,

} from '../actions/types'

export const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case WEATHER_LIST_REQUEST:
            return { loading: true }

        case WEATHER_LIST_SUCCESS:
            return { loading: false, weather: action.payload }

        case WEATHER_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}