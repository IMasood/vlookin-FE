import { apiRoutes } from "../../../routes/config";
import ApiServices from "../../ApiServices";

const AddBuildingService = {
  addBuilding: async (data) => {
    let endpoint = `  ${apiRoutes.createBuilding}`;
    console.log(endpoint);
    return ApiServices.post(endpoint, data).then((response) => {
      return response;
    });
  },
};

export default AddBuildingService;
