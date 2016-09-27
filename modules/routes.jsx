import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'App';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import Repos from 'Repos';
import Repo from 'Repo';
import ReduxBlogApp from 'ReduxBlogApp';
import ReduxYoutubeApp from 'ReduxYoutubeApp';
import ReduxWeatherApp from 'ReduxWeatherApp';
import PhotoGallery from 'PhotoGallery';

module.exports = (
  <Route path="/" component={App}>

    <Route path="react-weather" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>

    <Route path="redux-weather" component={ReduxWeatherApp} />

    <Route path="redux-blog" component={ReduxBlogApp}>
      <Route path="posts/new" component={ReduxBlogApp} />
      <Route path="posts/:id" component={ReduxBlogApp} />
    </Route>

    <Route path="redux-youtube" component={ReduxYoutubeApp} />

    <Route path="repo-maker" component={Repos}>
      <Route path="repo-maker/:userName/:repoName" component={Repo} />
    </Route>

    <Route path="joeno" component={PhotoGallery} />

  </Route>
);
