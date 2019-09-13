import * as actionTypes from "../actions/actionTypes";

const initial = {
  model_year: { min: 2000, max: 2019 },
  air_flow: { min: 0, max: 10000 },
  max_power: { min: 0, max: 100 },
  sound_at_max_speed: { min: 0, max: 100 },
  fan_sweep_diameter: { min: 0, max: 100 },
  height: { min: 0, max: 100 },
  firm: { min: 0, max: 20 },
  global: { min: 0, max: 10000 }
};

// Update Min & Max

const set_model_year = (state, action) => {
  return {
    ...state,
    model_year: {
      ...state.model_year,
      [action.name]: action.value
    }
  };
};

const set_air_flow = (state, action) => {
  return {
    ...state,
    air_flow: {
      ...state.air_flow,
      [action.name]: action.value
    }
  };
};

const set_max_power = (state, action) => {
  return {
    ...state,
    max_power: {
      ...state.max_power,
      [action.name]: action.value
    }
  };
};

const set_sound_at_max_speed = (state, action) => {
  return {
    ...state,
    sound_at_max_speed: {
      ...state.sound_at_max_speed,
      [action.name]: action.value
    }
  };
};

const set_fan_sweep_diameter = (state, action) => {
  return {
    ...state,
    fan_sweep_diameter: {
      ...state.fan_sweep_diameter,
      [action.name]: action.value
    }
  };
};

const set_height = (state, action) => {
  return {
    ...state,
    height: {
      ...state.height,
      [action.name]: action.value
    }
  };
};
const set_firm = (state, action) => {
  return {
    ...state,
    firm: {
      ...state.firm,
      [action.name]: action.value
    }
  };
};
const set_global = (state, action) => {
  return {
    ...state,
    global: {
      ...state.global,
      [action.name]: action.value
    }
  };
};

// Update Properties

const replace_model_year = (state, action) => {
  return {
    ...state,
    model_year: action.model_year
  };
};

const replace_air_flow = (state, action) => {
  return {
    ...state,
    air_flow: action.air_flow
  };
};

const replace_max_power = (state, action) => {
  return {
    ...state,
    max_power: action.max_power
  };
};

const replace_sound_at_max_speed = (state, action) => {
  return {
    ...state,
    sound_at_max_speed: action.sound_at_max_speed
  };
};

const replace_fan_sweep_diameter = (state, action) => {
  return {
    ...state,
    fan_sweep_diameter: action.fan_sweep_diameter
  };
};

const replace_height = (state, action) => {
  return {
    ...state,
    height: action.height
  };
};

const replace_firm = (state, action) => {
  return {
    ...state,
    firm: action.firm
  };
};

const replace_global = (state, action) => {
  return {
    ...state,
    global: action.global
  };
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.SET_MODEL_YEAR:
      return set_model_year(state, action);
    case actionTypes.SET_AIR_FLOW:
      return set_air_flow(state, action);
    case actionTypes.SET_MAX_POWER:
      return set_max_power(state, action);
    case actionTypes.SET_SOUND_AT_MAX_SPEED:
      return set_sound_at_max_speed(state, action);
    case actionTypes.SET_FAN_SWEEP_DIAMETER:
      return set_fan_sweep_diameter(state, action);
    case actionTypes.SET_HEIGHT:
      return set_height(state, action);
    case actionTypes.SET_FIRM:
      return set_firm(state, action);
    case actionTypes.SET_GLOBAL:
      return set_global(state, action);

    case actionTypes.REPLACE_MODEL_YEAR:
      return replace_model_year(state, action);
    case actionTypes.REPLACE_AIR_FLOW:
      return replace_air_flow(state, action);
    case actionTypes.REPLACE_MAX_POWER:
      return replace_max_power(state, action);
    case actionTypes.REPLACE_SOUND_AT_MAX_SPEED:
      return replace_sound_at_max_speed(state, action);
    case actionTypes.REPLACE_FAN_SWEEP_DIAMETER:
      return replace_fan_sweep_diameter(state, action);
    case actionTypes.REPLACE_HEIGHT:
      return replace_height(state, action);
    case actionTypes.REPLACE_FIRM:
      return replace_firm(state, action);
    case actionTypes.REPLACE_GLOBAL:
      return replace_global(state, action);

    default:
      return state;
  }
};

export default reducer;
