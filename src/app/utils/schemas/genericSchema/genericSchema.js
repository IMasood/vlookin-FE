import { errors } from "./genericErrors";
import * as Yup from "yup";
const numberRegex = /^(?:\+971|0)(?:\d{1,2})?\d{7}$/;
const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
export const requiredText = (value) => {
  return Yup.string().required(value + " " + errors.required);
};

export const requiredBool = (value) => {
  return Yup.boolean().required(value + " " + errors.required);
};

export const requiredNumber = (value) => {
  return Yup.string()
    .matches(numberRegex, errors.notValid.number)
    .required(value + " " + errors.required);
};

export const requiredEmail = (value) => {
  return Yup.string()
    .matches(emailRegex, errors.notValid.email)
    .required(value + " " + errors.required);
};
