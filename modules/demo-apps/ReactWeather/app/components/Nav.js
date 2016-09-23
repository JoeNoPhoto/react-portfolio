import React from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends React.Component {
  onSearch(e) {
    e.preventDefault();
    let location = this.refs.search.value;
    const encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      location = '';
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink
                to="/react-weather"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Get Weather
              </IndexLink>
            </li>
            <li>
              <Link
                to="/react-weather/examples"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >
                Examples
              </Link>
            </li>
            <li>
              <Link
                to="/react-weather/about"
                activeClassName="active"
                activeStyle={{ fontWeight: 'bold' }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search weather by city" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
