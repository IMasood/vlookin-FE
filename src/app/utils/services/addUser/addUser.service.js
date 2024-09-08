import { apiRoutes } from "../../../routes/config";
import ApiServices from "../../ApiServices";

const AddUserService = {
  addUser: async (data) => {
    let endpoint = `  ${apiRoutes.createUsers}`;
    console.log(endpoint);
    return ApiServices.post(endpoint, data).then((response) => {
      return response;
    });
  },
};

export default AddUserService;
