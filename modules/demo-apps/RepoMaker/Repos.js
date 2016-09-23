import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import NavLink from 'NavLink';

class Repos extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repo-maker/${userName}/${repo}`;
    this.context.router.push(path);
    browserHistory.push(path);
  }

  render() {
    return (
      <div>
        <h2>Repo Maker</h2>
        <ul role="navigation">
          <li>
            <NavLink
              to="/repo-maker/reactjs/react-router"
            >
              React Router
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/repo-maker/facebook/react"
            >
              React
            </NavLink>
          </li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName" />{' '}
              <input type="text" placeholder="repo" />{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

Repos.contextTypes = { router: PropTypes.object };
Repos.propTypes = { children: PropTypes.node };

export default Repos;
