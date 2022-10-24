import validator from "validator";

export const isAuthValid = (username, passsword) => {
  let isValid = true;

  if (validator.isEmpty(username) || validator.isEmpty(passsword)) {
    isValid = false;
  }

  return isValid;
};
