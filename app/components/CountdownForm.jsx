var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    let totalSeconds = this.refs.seconds.value;

    if (totalSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(totalSeconds, 10));
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSumbit} ref="form" className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button hollow expanded">Start</button>
        </form>
      </div>
    );
  }

});

module.exports = CountdownForm;
