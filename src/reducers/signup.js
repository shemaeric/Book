import { SIGNUP_FAILURE, NEW_POST, SIGNUP_SUCCESS } from "../actions/types/Signup";

const initialState = {
  user: {},
  errors: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_FAILURE:
      return {
        ...state,
        message: action.payload.message,
        errors: action.payload.errors || [],
        submitting: false
      };
    case NEW_POST:
      return {
        ...state,
        user: action.payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        errors: action.payload
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        message: 'hello',
      };
    default:
      return state;
  }
}
