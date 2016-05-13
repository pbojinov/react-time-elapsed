import React from 'react';
import SecondsTohhmmss from './SecondsTohhmmss';

class Timer extends React.Component {

  static delay = 100;
  constructor(props) {
    super(props);
    this.state = {
      clock: 0,
      time: ''
    };
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  // Increment the timer
  update() {
    let clock = this.state.clock;
    clock += this.calculateOffset();
    this.setState({
      clock: clock
    });
    let time = SecondsTohhmmss(clock / 1000);
    this.setState({
      time: time
    });
  }

  // Calculate the offset time
  calculateOffset() {
    let now = Date.now();
    let offset = now - this.offset;
    this.offset = now;
    return offset;
  }

  render() {
    let timerStyle = {
      margin: "0",
      padding: "2em"
    };

    let secondsStyles = {
      fontSize: "200%",
      fontWeight: "200",
      lineHeight: "1.5",
      margin: "0",
      color: "#666"
    };

    return (
      <div style={timerStyle} className="react-time-elapsed">
        <div style={secondsStyles} className="seconds"> {this.state.time}</div>
      </div>
      );
  }
}

export default Timer;
