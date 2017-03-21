var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
      totalSeconds: 10
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {
    let seconds = totalSeconds % 60,
        minutes = Math.floor(totalSeconds / 60);

    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    return minutes+':'+seconds;
  },
  render: function() {
    let {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }

});

module.exports = Clock;
