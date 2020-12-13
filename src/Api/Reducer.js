const Test = (
  state = {
    sellerData: {},
    apiCall: false,
    jwttoken: "",
    sellerDetailsState: "",
    apiStatus: false,
    asinDetails: "",
  },
  Action
) => {
  switch (Action.type) {
    case "SELLER_DATA":
      return {
        ...state,
        sellerData: Action.payload,
        apiCall: true,
        apiStatus: true,
      };
    case "LIVE_SELLER_DATA":
      return {
        ...state,
        jwttoken: Action.payload,
      };
    case "SELLER_DETAILS":
      return {
        ...state,
        sellerDetailsState: Action.payload,
      };
    case "Asin_Details":
      return {
        ...state,
        asinDetails: Action.payload,
      };

    default:
      return { apiCall: false, apiStatus: false };
  }
};

export default Test;
