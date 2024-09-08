import { requiredBool, requiredText } from "../genericSchema/genericSchema";
import * as Yup from "yup";

export const AddVisitorSchemas = Yup.object().shape({
  vistorName: requiredText("Full name"),
  email: requiredText("Email"),
  contact: requiredText("Contact number"),
  visitDate: requiredText("Visit Date"),
  buildingName: requiredText("Building name"),
  flatNo: requiredText("Flat number"),
  studioFlat: requiredBool("Studio Flat"),
  maxRooms: Yup.string().when("studioFlat", {
    is: (val) => val !== true,
    then: () => requiredText("Number of room"),
  }),
  //   comments: requiredText(""),
  // followUp:requiredText("Full Name"),
});
