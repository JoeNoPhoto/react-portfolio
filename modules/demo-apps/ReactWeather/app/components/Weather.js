import React, { PropTypes, Component } from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import ErrorModal from 'ErrorModal';
import openWeatherMap from 'openWeatherMap';

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const location = this.props.location.query.location;
    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  componentWillReceiveProps(newProps) {
    const location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }

  handleSearch(location) {
    const that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    });

    openWeatherMap.getTemp(location).then((temp) => {
      that.setState({
        location,
        temp,
        isLoading: false,
      });
    }, (e) => {
      that.setState({
        isLoading: false,
        errorMessage: e.message,
      });
    });
  }

  render() {
    const { isLoading, temp, location, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
      return false;
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
      return false;
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
          {renderMessage()}
          {renderError()}
      </div>
    );
  }
}

Weather.propTypes = {
  location: PropTypes.object.isRequired,
};
