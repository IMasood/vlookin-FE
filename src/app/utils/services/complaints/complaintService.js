import { BASE_URL,apiRoutes } from "../../../routes/config";
import ApiServices from "../../ApiServices";

const complaintService = {
  getComplaint: async (tenantId) => {
    let endpoint = `${BASE_URL}${apiRoutes.getComplaints}?tenantId=${tenantId}`
    return ApiServices.get(endpoint).then(
      (response) => {
        // Modify the response if needed
        return response;
      }
    );
  },



  // Add other list-related functions as needed
};

export default complaintService;
