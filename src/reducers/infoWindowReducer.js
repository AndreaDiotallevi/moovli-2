import {
  COUNTRY_CODE_NOT_FETCHED,
  COORDINATES_FETCHED,
} from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case COORDINATES_FETCHED:
      return false;
    case COUNTRY_CODE_NOT_FETCHED:
      return true;
    default:
      return state;
  }
};
