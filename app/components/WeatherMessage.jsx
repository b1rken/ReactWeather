var React = require('react');


var WeatherMessage = ({temp, location}) => {

  return (
    <h3 className="text-center">Det er {temp} grader i {location}</h3>
  )
};

module.exports = WeatherMessage;
