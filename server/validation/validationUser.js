const validation = require("validator");
const isEmpty = require("is-empty");

const userValidationData = (data) => {
  let errors = {};

  data.firstName = isEmpty(data.firstName) ? "" : data.firstName;
  if (validation.isEmpty(data.firstName)) {
    errors.firstName = "first name field is required";
  }

  data.lastName = isEmpty(data.lastName) ? "" : data.lastName;
  if (validation.isEmpty(data.lastName)) {
    errors.lastName = "last name field is required";
  }

  data.age = isEmpty(data.age) ? 0 : data.age;
  if (validation.isEmpty(data.age)) {
    errors.age = "age name field is required";
  }

  data.email = isEmpty(data.email) ? "" : data.email;
  if (validation.isEmpty(data.email)) {
    errors.email = "email field is required";
  }

  data.date = isEmpty(data.date) ? "" : data.date;
  if (validation.isEmpty(data.date)) {
    errors.date = "date field is not required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};

module.exports = userValidationData;
