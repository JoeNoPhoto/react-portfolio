/* @flow */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import store from './configureStore';
import Root from './components/Root';

const PhotoGallery = () => render(
  <Root store={store} />,
  document.getElementById('app')
);

export default PhotoGallery;
