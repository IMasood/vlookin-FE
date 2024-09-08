import {
  requiredText,
  requiredNumber,
  requiredEmail,
} from "../genericSchema/genericSchema";
import * as Yup from "yup";

export const addTenantSchemas = Yup.object().shape({
  tenantName: requiredText("Full name"),
  email: requiredEmail("Email"),
  password: requiredText("Password"),
  contact: requiredNumber("Mobile Number"),
  nationality: requiredText("Nationality"),
  buildingId: requiredText("Buidling"),
  apartmentId: requiredText("Apartment"),
  officeNo: requiredText("Office Number"),
  creationDate: requiredText("Creation Date"),
  joiningDate: requiredText("Joining Date"),
});
