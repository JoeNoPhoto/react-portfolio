import React, { Component } from 'react';
import NavLink from 'NavLink';
import store from 'store';
import Root from 'Root';

const PhotoNav = () => (
  <div className="top-bar">
    JoeNoPhoto
    <NavLink
      to="/joeno"
      activeClassName="active"
      activeStyle={{ fontWeight: 'bold' }}
    />
    {/* <Root store={store} /> */}
  </div>
);

export default PhotoNav;
