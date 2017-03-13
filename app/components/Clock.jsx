var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function() {
      totalSeconds: 10
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {
    console.log(totalSeconds);
    let seconds = totalSeconds % 60,
        minutes = Math.floor(totalSeconds / 60);
    console.log(seconds, minutes);
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    console.log(seconds, minutes);
    return minutes+':'+seconds;
  },
  render: function() {
    let {totalSeconds} = this.props;
    console.log(totalSeconds);
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
