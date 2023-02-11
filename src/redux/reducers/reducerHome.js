import { GET_HOME_API, ERROR_GET_HOME_API } from "../types";

const initialState = {
  data: [],
  loading: true
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_API:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case ERROR_GET_HOME_API:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default sampleReducer;
