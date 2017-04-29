var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');


var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {

    this.setState({isLoading: true});

    var that = this;

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });

  },
  render: function () {

    var {isLoading, temp, location} = this.state;
    console.log(this.state);

    function renderMessage () {
      if (isLoading) {
        return <h3>Henter værdata...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;

      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
