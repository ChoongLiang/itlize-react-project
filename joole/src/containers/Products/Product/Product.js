import React from "react";
import "./Product.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/package";

function Product(props) {
  const img_size = {
      width: "200px",
      height: "200px"
    },
    info_bg = {
      background: "#f2f2f2"
    },
    max_voltage = props.detail.power
      .replace("[", "")
      .replace("]", "")
      .split(","),
    air_flow =
      props.detail["air_flow"].substring(0, 1) +
      "," +
      props.detail["air_flow"].substring(1);

  const handleClick = () => {
    props.history.push(props.match.url + "/" + props.detail.id);
    props.set(props.detail);
  };

  const handleChange = event => {
    if (event.target.checked) {
      props.compare(props.detail, true);
    } else {
      props.compare(props.detail, false);
    }
  };

  return (
    <div className="text-center">
      <div onClick={handleClick}>
        <img
          src={props.detail["image_url"]}
          alt="Product image"
          style={img_size}
        />
        <h6>{props.detail.manufacturer}</h6>
        <h6>{props.detail.series}</h6>
        <h6>{props.detail.model}</h6>
        <div style={info_bg}>
          <p className="mb-0">{air_flow} CFM</p>
          <p className="mb-0">{max_voltage[1]} W at max speed</p>
          <p className="mb-0">
            {props.detail["sound_at_max_speed"]} dBA at max speed
          </p>
          <p className="mb-0">
            {props.detail["fan_sweep_diameter"]}" fan sweep diameter
          </p>
        </div>
        <p className="mb-0 text-danger">Past specifications:</p>
        <p className="mb-0 text-danger">
          {props.detail.firm} firm / {props.detail.global} global
        </p>
      </div>
      <div className="row my-2">
        <div className="col">
          <input
            type="checkbox"
            className="mr-2"
            onChange={handleChange}
            value={props.detail}
          />
          <span className="checkbox-lbl text-secondary">Compare</span>
        </div>
        <div className="col">
          <button className="add-to-btn input-container mr-2">
            Add to
            <div className="arrow-down" id="input-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    set: product => dispatch(actions.set(product))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
