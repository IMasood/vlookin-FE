import {
  requiredText,
  requiredNumber,
  requiredEmail,
} from "../genericSchema/genericSchema";
import * as Yup from "yup";

export const addBuildingSchemas = Yup.object().shape({
  buildingName: requiredText("Building code"),
  watchman: requiredText("Watchman"),
  landmark: requiredText("Landmark"),
  fullName: requiredText("Full name"),
  floorCount: requiredText("Floors"),
  parkingCount: requiredText("Parking"),
});
