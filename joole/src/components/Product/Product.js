import React from "react";
import "./Product.css";

export default function Product(props) {
  props = props.detail;
  let img_size = {
      width: "200px",
      height: "200px"
    },
    info_bg = {
      background: "#f2f2f2"
    },
    max_voltage = props.power
      .replace("[", "")
      .replace("]", "")
      .split(","),
    air_flow =
      props["air_flow"].substring(0, 1) + "," + props["air_flow"].substring(1);

  const handleClick = () => {
    props.clickHandler();
    console.log("clicked");
  };

  return (
    <div className="text-center" onClick={handleClick}>
      <img src={props["image_url"]} alt="Product image" style={img_size} />
      <h6>{props.manufacturer}</h6>
      <h6>{props.series}</h6>
      <h6>{props.model}</h6>
      <div style={info_bg}>
        <p className="mb-0">{air_flow} CFM</p>
        <p className="mb-0">{max_voltage[1]} W at max speed</p>
        <p className="mb-0">{props["sound_at_max_speed"]} dBA at max speed</p>
        <p className="mb-0">{props["fan_speed_diameter"]} fan sweep diameter</p>
      </div>
      <p className="mb-0 text-danger">Past specifications:</p>
      <p className="mb-0 text-danger">
        {props["firm"]} firm / {props["global"]} global
      </p>
      <div className="row my-2">
        <div className="col">
          <input type="checkbox" className="mr-2" />
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
