import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/package";

class PastSelections extends Component {
  state = {
    bidirectional_arrow: (
      <img
        src="https://image.flaticon.com/icons/svg/1/1096.svg"
        style={{ width: "20px", height: "20px" }}
        alt="bidirectional-arrow"
      />
    )
  };

  getFirm = () => {
    return (
      <div className="section-content no-gutters">
        <div className="row no-gutters pl-2">
          <div className="col-1">{this.state.bidirectional_arrow}</div>
          <div className="col-11 font-weight-bold">Firm</div>
        </div>
        <div className="row no-gutters">
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.firm.min}
              type="number"
              name="min"
              onChange={event =>
                this.props.updateFirm(
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
              maxValue={20}
              value={this.props.firm}
              onChange={value => this.props.replaceFirm(value)}
            />
          </div>
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.firm.max}
              type="number"
              name="max"
              onChange={event =>
                this.props.updateFirm(
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

  getGlobal = () => {
    return (
      <div className="section-content no-gutters">
        <div className="row no-gutters pl-2">
          <div className="col-1">{this.state.bidirectional_arrow}</div>
          <div className="col-11 font-weight-bold">Global</div>
        </div>
        <div className="row no-gutters">
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.global.min}
              type="number"
              name="min"
              onChange={event =>
                this.props.updateGlobal(
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
              value={this.props.global}
              onChange={value => this.props.replaceGlobal(value)}
            />
          </div>
          <div className="col-2">
            <input
              className="rangebar-input"
              value={this.props.global.max}
              type="number"
              name="max"
              onChange={event =>
                this.props.updateGlobal(
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
    let firm, global;
    let arrow = "sidebar-arrow-right";

    if (this.props.active) {
      arrow = "sidebar-arrow-down";
      firm = this.getFirm();
      global = this.getGlobal();
    }

    return (
      <div>
        <div
          className="section-title"
          id="past_selections"
          onClick={this.props.trigger}
        >
          Past Selections
          <div className={arrow} />
        </div>
        {firm}
        {global}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    firm: state.filter.firm,
    global: state.filter.global
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFirm: (name, value) => dispatch(actions.set_firm(name, value)),
    updateGlobal: (name, value) => dispatch(actions.set_global(name, value)),
    replaceFirm: value => dispatch(actions.replace_firm(value)),
    replaceGlobal: value => dispatch(actions.replace_global(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PastSelections);
