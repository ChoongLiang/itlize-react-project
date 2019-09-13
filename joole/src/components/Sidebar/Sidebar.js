import React, { Component } from "react";
import "./Sidebar.css";

import ProductType from "./Sections/ProductType";
import TechnicalSpecifications from "./Sections/TechnicalSpecifications";
import PastSelections from "./Sections/PastSelections";

import { connect } from "react-redux";
import * as actions from "../../store/actions/package";

class Sidebar extends Component {
  state = {
    product_type: { active: false },
    technical_specifications: { active: false },
    past_selections: { active: false }
  };

  triggerContent = event => {
    const target = event.target.id;
    let content = { ...this.state[target] };
    content.active = !content.active;
    this.setState({
      [target]: content
    });
  };

  submitSearch = () => {
    // Deep copy (Not efficient)
    let filtered = JSON.parse(JSON.stringify(this.props.categories[0]));
    let len = filtered.products.length;
    while (len--) {
      let product = filtered.products[len];
      if (
        // Model year
        parseInt(product.model_year) > this.props.model_year.max ||
        parseInt(product.model_year) < this.props.model_year.min ||
        // Air flow
        parseInt(product.air_flow) > this.props.air_flow.max ||
        parseInt(product.air_flow) < this.props.air_flow.min ||
        // Max power
        parseInt(this.arrayHandler(product.power)[1]) >
          this.props.max_power.max ||
        parseInt(this.arrayHandler(product.power)[0]) <
          this.props.max_power.min ||
        // Sound at max speed
        parseInt(product.sound_at_max_speed) >
          this.props.sound_at_max_speed.max ||
        parseInt(product.sound_at_max_speed) <
          this.props.sound_at_max_speed.min ||
        // Fan sweep diameter
        parseInt(product.fan_sweep_diameter) >
          this.props.fan_sweep_diameter.max ||
        parseInt(product.fan_sweep_diameter) <
          this.props.fan_sweep_diameter.min ||
        // Height
        parseInt(this.arrayHandler(product.height)[1]) >
          this.props.height.max ||
        parseInt(this.arrayHandler(product.height)[0]) <
          this.props.height.min ||
        // Firm
        parseInt(product.firm) > this.props.firm.max ||
        parseInt(product.firm) < this.props.firm.min ||
        // Global
        parseInt(product.global) > this.props.global.max ||
        parseInt(product.global) < this.props.global.min
      ) {
        filtered.products.splice(len, 1);
      }
    }
    this.props.search(filtered);
  };

  arrayHandler = arr => {
    return arr
      .replace("[", "")
      .replace("]", "")
      .split(",");
  };

  resetSearch = () => {
    this.props.replaceModelYear({ min: 2000, max: 2019 });
    this.props.replaceAirFlow({ min: 0, max: 10000 });
    this.props.replaceMaxPower({ min: 0, max: 100 });
    this.props.replaceSoundAtMaxSpeed({ min: 0, max: 100 });
    this.props.replaceFanSweepDiameter({ min: 0, max: 100 });
    this.props.replaceHeight({ min: 0, max: 100 });
    this.props.replaceFirm({ min: 0, max: 20 });
    this.props.replaceGlobal({ min: 0, max: 10000 });
  };

  render() {
    return (
      <div>
        <div className="row no-gutters">
          <div className="col text-center font-weight-bold text-secondary search-text">
            Search:
          </div>
          <div className="col">
            <button className="save-clear-btn" onClick={this.submitSearch}>
              Save
            </button>
          </div>
          <div className="col">
            <button className="save-clear-btn" onClick={this.resetSearch}>
              Clear
            </button>
          </div>
        </div>

        <div className="row no-gutters mt-1">
          <div className="col">
            <button className="product-project-btn--active">Product</button>
          </div>
          <div className="col">
            <button className="product-project-btn">Project</button>
          </div>
        </div>

        <ProductType
          active={this.state.product_type.active}
          trigger={this.triggerContent}
        />
        <TechnicalSpecifications
          active={this.state.technical_specifications.active}
          trigger={this.triggerContent}
        />
        <PastSelections
          active={this.state.past_selections.active}
          trigger={this.triggerContent}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.search.categories,
    model_year: state.filter.model_year,
    air_flow: state.filter.air_flow,
    max_power: state.filter.max_power,
    sound_at_max_speed: state.filter.sound_at_max_speed,
    fan_sweep_diameter: state.filter.fan_sweep_diameter,
    height: state.filter.height,
    firm: state.filter.firm,
    global: state.filter.global
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: category => dispatch(actions.search(category)),

    // Replace
    replaceModelYear: value => dispatch(actions.replace_model_year(value)),
    replaceAirFlow: value => dispatch(actions.replace_air_flow(value)),
    replaceMaxPower: value => dispatch(actions.replace_max_power(value)),

    replaceSoundAtMaxSpeed: value =>
      dispatch(actions.replace_sound_at_max_speed(value)),

    replaceFanSweepDiameter: value =>
      dispatch(actions.replace_fan_sweep_diameter(value)),

    replaceHeight: value => dispatch(actions.replace_height(value)),
    replaceFirm: value => dispatch(actions.replace_firm(value)),
    replaceGlobal: value => dispatch(actions.replace_global(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
