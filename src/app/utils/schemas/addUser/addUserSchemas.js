import {
  requiredText,
  requiredBool,
  requiredNumber,
  requiredEmail,
} from "../genericSchema/genericSchema";
import * as Yup from "yup";

export const addUserSchemas = Yup.object().shape({
  userName: requiredText("User Name"),
  email: requiredEmail("Email"),
  password: requiredText("Password"),
  userId: requiredText("User Id"),
  contact: requiredNumber("Contact"),
  role: requiredText("Role"),
  gender: requiredText("Gender"),
  allowAMS: requiredBool("Option"),
  realEstate: Yup.string().when("role", {
    is: (val) => val !== "Admin",
    then: () => requiredText("Real Estate"),
  }),
  buildingId: Yup.string().when("role", {
    is: (val) => val !== "Admin",
    then: () => requiredText("Building Id"),
  }),
});
