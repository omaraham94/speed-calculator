import React, {Component} from 'react';
import './App.css';
import {addToHistory} from "./actions/actions";
import {connect} from "react-redux";
import SpeedCalcInput from "./components/SpeedCalcInput";
import {roundToTwoDecimalPlaces} from "./utils";

class App extends Component {
  state = {
    distance: '',
    time: '',
    speed: null
  };
  onDistanceChange = (e) => {
    const distance = e.target.value;
    this.setState({distance});
  };

  onTimeChange = (e) => {
    const time = e.target.value;
    this.setState({time});
  };

  onSubmitClick = () => {
    const {distance, time} = this.state;
    if (!distance) {
      alert('please fill distance');
      return;
    }
    const distanceFloat = parseFloat(distance);
    if (distanceFloat < 0) {
      alert('distance cannot be negative');
      return;
    }
    if (!time) {
      alert('please fill time');
      return;
    }
    const timeFloat = parseFloat(time);
    if (timeFloat < 0) {
      alert('time cannot be negative');
      return;
    }
    if (time === '0') {
      alert('time cannot be equal to 0');
      return;
    }

    const speed = roundToTwoDecimalPlaces(distanceFloat/timeFloat);
    this.props.addToHistory({distance: distanceFloat, time: timeFloat, speed});
    this.setState({distance: '', time: '', speed});
  }
  render() {
    const {history} = this.props;
    return (
      <div className="padding20">
        <h2>Speed Calculator</h2>
        <div className="container">
          <div className="subContainer">
            <SpeedCalcInput headerText="Distance" sideText="miles" onChange={this.onDistanceChange} value={this.state.distance} />

            <div className="divider"/>

            <SpeedCalcInput headerText="Time" sideText="hours" onChange={this.onTimeChange} value={this.state.time} />
          </div>
          <h4 className="padding10">=</h4>
          <h3>{this.state.speed}</h3>

        </div>

        <button className="margin20" onClick={this.onSubmitClick}>Submit</button>
        <div>
          <h2>History</h2>
          {
            history.map((item, index) => (
              <p key={index}>{item.distance}/{item.time} = {item.speed}mph</p>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

const mapDispatchToProps = (dispatch) => ({
  addToHistory: (data) => {dispatch(addToHistory(data))}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
