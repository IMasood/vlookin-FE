import ApiServices from "../ApiServices";

const BASE_URL = "http://195.35.45.131:8080/"

const listService = {
  getList: async (pageNumber, pageSize) => {
    let dataToPost = {
      pageNumber: pageNumber,
      pageSize: pageSize,
    };
    let endpoint = `${BASE_URL}api/v1/bank/receipt/list`
    return ApiServices.post(endpoint, dataToPost).then(
      (response) => {
        // Modify the response if needed
        return response;
      }
    );
  },

  addItem: async (item) => {
    let endpoint = `${BASE_URL}api/v1/bank/receipt/list`

    return ApiServices.post(endpoint, { item }).then(
      (response) => {
        // Modify the response if needed
        return response;
      }
    );
  },

  // Add other list-related functions as needed
};

export default listService;
