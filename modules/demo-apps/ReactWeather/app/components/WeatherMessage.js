var React = require('react');
var Weather = require('Weather');

const WeatherMessage = ({temp, location}) => {
    return(
      <p className="text-center">It is {temp} in {location}</p>
    );
}

export default WeatherMessage;
