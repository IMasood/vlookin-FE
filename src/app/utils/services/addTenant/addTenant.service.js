import { apiRoutes } from "../../../routes/config";
import ApiServices from "../../ApiServices";

const AddUserService = {
  addTenant: async (data) => {
    let endpoint = `  ${apiRoutes.postTenant}`;
    console.log(endpoint);
    return ApiServices.post(endpoint, data).then((response) => {
      return response;
    });
  },
};

export default AddUserService;
