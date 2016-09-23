import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the users to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/redux-blog');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help form-control-label">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div
          className={
          `form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}
        >
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help form-control-label">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help form-control-label">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/redux-blog" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

PostsNew.contextTypes = {
  router: PropTypes.object,
};

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a Title';
  }

  if (!values.categories) {
    errors.categories = 'Enter at Least 1 Category';
  }

  if (!values.content) {
    errors.content = 'Enter Some Content';
  }
  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps\
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate,
}, null, { createPost })(PostsNew);