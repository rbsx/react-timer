const React = require('react');
const Clock = require('Clock');

const Timer = (props) => {
  return (
    <div>
        <Clock totalSeconds={0}/>
    </div>
  );
}

module.exports = Timer;
