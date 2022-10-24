import Types from "../types/Types";

const initialState = {
  loading: false,
  errorMesage: null,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.startLoading:
      return {
        ...state,
        loading: true,
      };

    case Types.stopLoading:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
