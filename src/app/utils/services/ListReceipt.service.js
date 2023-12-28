import ApiServices from "../ApiServices";

const listService = {
  getList: async (pageNumber, pageSize) => {
    let dataToPost = {
      pageNumber: pageNumber,
      pageSize: pageSize,
    };
    return ApiServices.post("api/v1/bank/receipt/list", dataToPost).then(
      (response) => {
        // Modify the response if needed
        return response;
      }
    );
  },

  addItem: async (item) => {
    return ApiServices.post("api/v1/bank/receipt/list", { item }).then(
      (response) => {
        // Modify the response if needed
        return response;
      }
    );
  },

  // Add other list-related functions as needed
};

export default listService;
