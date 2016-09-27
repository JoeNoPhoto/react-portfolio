import React, { Component } from 'react';
import NavLink from './NavLink';

const DemoNav = () => (
      <div className="top-bar">REACT and REDUX APPS
        <ul className="menu">
          <li>
            <NavLink
              to="react-weather"
              activeClassName="active"
              activeStyle={{ fontWeight: 'bold' }}
            >
              React Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="redux-weather"
              activeClassName="active"
              activeStyle={{ fontWeight: 'bold' }}
            >
              Redux Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="redux-blog"
              activeClassName="active"
              activeStyle={{ fontWeight: 'bold' }}
            >
              Redux Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="redux-youtube"
              activeClassName="active"
              activeStyle={{ fontWeight: 'bold' }}
            >
              Youtube Jawn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="repo-maker"
              activeClassName="active"
              activeStyle={{ fontWeight: 'bold' }}
            >
              Repo Maker
            </NavLink>
          </li>
        </ul>
      </div>
    );

export default DemoNav;
