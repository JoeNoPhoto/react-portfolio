import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the users to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/redux-blog'); });
  }

  render() {
    const { post } = this.props;

    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/redux-blog">Back to Index</Link>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
  );
  }
}

PostsShow.contextTypes = {
  router: PropTypes.object,
};

function mapStateToProps(state) {
  return { post: state.posts.post };
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
