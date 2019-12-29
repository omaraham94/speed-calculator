import PropTypes from 'prop-types'
import React from "react";

export default class SpeedCalcInput extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.headerText}</p>
        <div className="speedContainer">
          <input type="number" value={this.props.value} onChange={this.props.onChange} />
          <p className="marginLeft5">{this.props.sideText}</p>
        </div>
      </div>
    )
  }
}

SpeedCalcInput.propTypes = {
  headerText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sideText: PropTypes.string.isRequired
};
