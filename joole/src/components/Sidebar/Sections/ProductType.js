import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/package";

class ProductType extends Component {
  render() {
    let model_year,
      arrow = "sidebar-arrow-right";

    if (this.props.active) {
      model_year = (
        <div className="row section-content no-gutters">
          <div className="col-5 font-weight-bold text-secondary">
            Model year:
          </div>
          <div className="col-7">
            <div className="row text-right no-gutters">
              <div className="col-3 offset-5">
                <input
                  className="rangebar-input"
                  name="min"
                  type="number"
                  value={this.props.model_year.min}
                  onChange={event =>
                    this.props.updateModelYear(
                      event.target.name,
                      event.target.valueAsNumber
                    )
                  }
                />
              </div>
              <div className="col-1 text-center">-</div>
              <div className="col-3">
                <input
                  className="rangebar-input"
                  name="max"
                  type="number"
                  value={this.props.model_year.max}
                  onChange={event =>
                    this.props.updateModelYear(
                      event.target.name,
                      event.target.valueAsNumber
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      );
      arrow = "sidebar-arrow-down";
    }

    return (
      <div>
        <div
          className="section-title"
          id="product_type"
          onClick={this.props.trigger}
        >
          Product Type
          <div className={arrow} />
        </div>
        {model_year}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    model_year: state.filter.model_year
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateModelYear: (name, value) =>
      dispatch(actions.set_model_year(name, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductType);
