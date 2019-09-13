import * as actionTypes from "./actionTypes";

// Update Min & Max

export const set_model_year = (name, value) => {
  return {
    type: actionTypes.SET_MODEL_YEAR,
    value: value,
    name: name
  };
};

export const set_air_flow = (name, value) => {
  return {
    type: actionTypes.SET_AIR_FLOW,
    value: value,
    name: name
  };
};

export const set_max_power = (name, value) => {
  return {
    type: actionTypes.SET_MAX_POWER,
    value: value,
    name: name
  };
};

export const set_sound_at_max_speed = (name, value) => {
  return {
    type: actionTypes.SET_SOUND_AT_MAX_SPEED,
    value: value,
    name: name
  };
};

export const set_fan_sweep_diameter = (name, value) => {
  return {
    type: actionTypes.SET_FAN_SWEEP_DIAMETER,
    value: value,
    name: name
  };
};

export const set_height = (name, value) => {
  return {
    type: actionTypes.SET_HEIGHT,
    value: value,
    name: name
  };
};

export const set_firm = (name, value) => {
  return {
    type: actionTypes.SET_FIRM,
    value: value,
    name: name
  };
};

export const set_global = (name, value) => {
  return {
    type: actionTypes.SET_GLOBAL,
    value: value,
    name: name
  };
};

// Update properties

export const replace_model_year = model_year => {
  return {
    type: actionTypes.REPLACE_MODEL_YEAR,
    model_year: model_year
  };
};

export const replace_air_flow = air_flow => {
  return {
    type: actionTypes.REPLACE_AIR_FLOW,
    air_flow: air_flow
  };
};

export const replace_max_power = max_power => {
  return {
    type: actionTypes.REPLACE_MAX_POWER,
    max_power: max_power
  };
};

export const replace_sound_at_max_speed = max_speed => {
  return {
    type: actionTypes.REPLACE_SOUND_AT_MAX_SPEED,
    sound_at_max_speed: max_speed
  };
};

export const replace_fan_sweep_diameter = diameter => {
  return {
    type: actionTypes.REPLACE_FAN_SWEEP_DIAMETER,
    fan_sweep_diameter: diameter
  };
};

export const replace_height = height => {
  return {
    type: actionTypes.REPLACE_HEIGHT,
    height: height
  };
};

export const replace_firm = firm => {
  return {
    type: actionTypes.REPLACE_FIRM,
    firm: firm
  };
};

export const replace_global = global => {
  return {
    type: actionTypes.REPLACE_GLOBAL,
    global: global
  };
};
