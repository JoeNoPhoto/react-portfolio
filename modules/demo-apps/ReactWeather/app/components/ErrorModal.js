import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

export default class ErrorModal extends Component {
  componentDidMount() {
    const { title, message } = this.props;
    const modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );

    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    return (<div>MyComponent</div>);
  }
}

ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};
ErrorModal.defaultProps = {
  title: 'Error',
};
