import { apiRoutes } from "../../../routes/config";
import ApiServices from "../../ApiServices";

const AddVisitorService = {
  addVisitor: async (data) => {
    let endpoint = `${apiRoutes.createVisitor}`;
    return ApiServices.post(endpoint, data).then((response) => {
      return response;
    });
  },
};

export default AddVisitorService;
