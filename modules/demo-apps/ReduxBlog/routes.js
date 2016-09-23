import React from 'react';
import { Route, IndexRoute } from 'react-router';

import BlogApp from './components/BlogApp'
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
  <Route path="redux-blog" component={BlogApp} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);
