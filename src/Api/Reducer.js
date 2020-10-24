const Test = (
  state = {
    sellerData: {},
    apiCall: false,
    apiStatus: false,
  },
  Action
) => {
  switch (Action.type) {
    case "SELLER_DATA":
      return {
        // ...state,
        sellerData: Action.payload,
        apiCall: true,
        apiStatus: true,
      };

    default:
      return { apiCall: false, apiStatus: false };
  }
};

export default Test;
