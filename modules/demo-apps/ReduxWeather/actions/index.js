import axios from 'axios';

const API_KEY = '48c0e1e17b2bb98253b243fadd6043b5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// create const to keep action types consistent between action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// create an action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&units=imperial&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
