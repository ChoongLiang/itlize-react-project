import React from "react";

const spinner = props => {
  let style = {
    width: props.width,
    height: props.height
  };
  return (
    <div className="spinner-border text-dark" style={style} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default spinner;
