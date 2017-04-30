var React = require('react');

var TheErrorModal = React.createClass({


  getDefaultProps: function () {
    return {
      title: 'Ops, noe gikk galt!'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#the-error-modal'));
    modal.open();
  },
  render: function () {
    var { title, message } = this.props;
    return (
      <div id="the-error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            OK
          </button>
        </p>
      </div>
    );
  }
});

module.exports = TheErrorModal;
