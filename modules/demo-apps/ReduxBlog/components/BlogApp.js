import React, { PropTypes } from 'react';

const BlogApp = (props) => <div>{props.children}</div>;

BlogApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlogApp;
