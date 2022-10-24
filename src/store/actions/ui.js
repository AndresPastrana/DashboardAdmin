import Types from "../types/Types";

export const startLoading = () => {
  return {
    type: Types.startLoading,
  };
};

export const stopLoading = () => {
  return {
    type: Types.stopLoading,
  };
};
