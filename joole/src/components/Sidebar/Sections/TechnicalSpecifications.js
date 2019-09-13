import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./Rangebar.css";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/package";

class TechnicalSpecifications extends Component {
  state = {
    bidirectional_arrow: (
      <img
        src="https://image.flaticon.com/icons/svg/1/1096.svg"
        style={{ width: "20px", height: "20px" }}
        alt="bidirectional-arrow"
      />
    )
  };

  getAirFlow = () => {
    return (
      <div className="section-content no-gutters">
        <div className="row no-gutters pl-2">
          <div className="col-1">{this.state.bidirectional_arrow}</div>
          <div className="col-11 font-weight-bold">Airflow (CFM)</div>
        </div>
        <div className="row no-gutters">
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.air_flow.min}
              type="number"
              name="min"
              onChange={event =>
                this.props.updateAirFlow(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
          <div className="col-8 text-center">
            <InputRange
              name="air_flow"
              minValue={0}
              maxValue={10000}
              value={this.props.air_flow}
              onChange={value => this.props.replaceAirFlow(value)}
            />
          </div>
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.air_flow.max}
              type="number"
              name="max"
              onChange={event =>
                this.props.updateAirFlow(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
        </div>
      </div>
    );
  };

  getMaxPower = () => {
    return (
      <div className="section-content no-gutters">
        <div className="row no-gutters pl-2">
          <div className="col-1">{this.state.bidirectional_arrow}</div>
          <div className="col-11 font-weight-bold">Max power (W)</div>
        </div>
        <div className="row no-gutters">
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.max_power.min}
              type="number"
              name="min"
              onChange={event =>
                this.props.updateMaxPower(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
          <div className="col-8 text-center">
            <InputRange
              name="max_power"
              minValue={0}
              maxValue={100}
              value={this.props.max_power}
              onChange={value => this.props.replaceMaxPower(value)}
            />
          </div>
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.max_power.max}
              type="number"
              name="max"
              onChange={event =>
                this.props.updateMaxPower(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
        </div>
      </div>
    );
  };

  getSoundAtMaxSpeed = () => {
    return (
      <div className="section-content no-gutters">
        <div className="row no-gutters pl-2">
          <div className="col-1">{this.state.bidirectional_arrow}</div>
          <div className="col-11 font-weight-bold">
            Sound at max speed (dBA)
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.sound_at_max_speed.min}
              type="number"
              name="min"
              onChange={event =>
                this.props.updateSoundAtMaxSpeed(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
          <div className="col-8 text-center">
            <InputRange
              name="sound_at_max_speed"
              minValue={0}
              maxValue={100}
              value={this.props.sound_at_max_speed}
              onChange={value => this.props.replaceSoundAtMaxSpeed(value)}
            />
          </div>
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.sound_at_max_speed.max}
              type="number"
              name="max"
              onChange={event =>
                this.props.updateSoundAtMaxSpeed(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
        </div>
      </div>
    );
  };

  getFanSweepDiameter = () => {
    return (
      <div className="section-content no-gutters">
        <div className="row no-gutters pl-2">
          <div className="col-1">{this.state.bidirectional_arrow}</div>
          <div className="col-11 font-weight-bold">Fan sweep diameter (in)</div>
        </div>
        <div className="row no-gutters">
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.fan_sweep_diameter.min}
              type="number"
              name="min"
              onChange={event =>
                this.props.updateFanSweepDiameter(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
          <div className="col-8 text-center">
            <InputRange
              name="fan_sweep_diameter"
              minValue={0}
              maxValue={100}
              value={this.props.fan_sweep_diameter}
              onChange={value => this.props.replaceFanSweepDiameter(value)}
            />
          </div>
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.fan_sweep_diameter.max}
              type="number"
              name="max"
              onChange={event =>
                this.props.updateFanSweepDiameter(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
        </div>
      </div>
    );
  };

  getHeight = () => {
    return (
      <div className="section-content no-gutters">
        <div className="row no-gutters pl-2">
          <div className="col-1">{this.state.bidirectional_arrow}</div>
          <div className="col-11 font-weight-bold">Height (in)</div>
        </div>
        <div className="row no-gutters">
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.height.min}
              type="number"
              name="min"
              onChange={event =>
                this.props.updateHeight(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
          <div className="col-8 text-center">
            <InputRange
              name="height"
              minValue={0}
              maxValue={100}
              value={this.props.height}
              onChange={value => this.props.replaceHeight(value)}
            />
          </div>
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.height.max}
              type="number"
              name="max"
              onChange={event =>
                this.prop.updateHeight(
                  event.target.name,
                  event.target.valueAsNumber
                )
              }
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    let air_flow, max_power, sound_at_max_speed, fan_sweep_diameter, height;
    let arrow = "sidebar-arrow-right";

    if (this.props.active) {
      arrow = "sidebar-arrow-down";
      air_flow = this.getAirFlow();
      max_power = this.getMaxPower();
      sound_at_max_speed = this.getSoundAtMaxSpeed();
      fan_sweep_diameter = this.getFanSweepDiameter();
      height = this.getHeight();
    }

    return (
      <div>
        <div
          className="section-title"
          id="technical_specifications"
          onClick={this.props.trigger}
        >
          Technical Specifications
          <div className={arrow} />
        </div>
        {air_flow}
        {max_power}
        {sound_at_max_speed}
        {fan_sweep_diameter}
        {height}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    air_flow: state.filter.air_flow,
    max_power: state.filter.max_power,
    sound_at_max_speed: state.filter.sound_at_max_speed,
    fan_sweep_diameter: state.filter.fan_sweep_diameter,
    height: state.filter.height
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // Update min & max
    updateAirFlow: (name, value) => dispatch(actions.set_air_flow(name, value)),

    updateMaxPower: (name, value) =>
      dispatch(actions.set_max_power(name, value)),

    updateSoundAtMaxSpeed: (name, value) =>
      dispatch(actions.set_sound_at_max_speed(name, value)),

    updateFanSweepDiameter: (name, value) =>
      dispatch(actions.set_fan_sweep_diameter(name, value)),

    updateHeight: (name, value) => dispatch(actions.set_height(name, value)),

    // Replace
    replaceAirFlow: value => dispatch(actions.replace_air_flow(value)),

    replaceMaxPower: value => dispatch(actions.replace_max_power(value)),

    replaceSoundAtMaxSpeed: value =>
      dispatch(actions.replace_sound_at_max_speed(value)),

    replaceFanSweepDiameter: value =>
      dispatch(actions.replace_fan_sweep_diameter(value)),

    replaceHeight: value => dispatch(actions.replace_height(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TechnicalSpecifications);
