var React = require('react');


var WeatherMessage = ({temp, location}) => {

  return (
    <p>Det er {temp} grader i {location}</p>
  )
};

module.exports = WeatherMessage;
