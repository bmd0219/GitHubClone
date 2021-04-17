import * as type from "./authTypes";

// TODO: Write sesson storage token
const initialState = {
  isAuthenticated: null,
  user: null,
  registerMessage: null,
  resend: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        registerMessage: null,
      };

    case type.LOGIN_FAILURE:

    case type.REGISTER_SUCCESS:
      return {
        ...state,
        registerMessage: action.payload.msg,
      };

    case type.LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        registerMessage: null,
      };

    default:
      return state;
  }
}
