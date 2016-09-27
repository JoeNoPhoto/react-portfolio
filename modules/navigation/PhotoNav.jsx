import React, { Component } from 'react';
import NavLink from 'NavLink';
import store from 'store';
import Root from 'Root';

const PhotoNav = () => (
  <div className="top-bar">
    <Root store={store} />
  </div>
);

export default PhotoNav;
