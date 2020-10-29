import axios from "axios";
import jsonData from "../Assets/Asin_Seller_only_seller_1.json";
const POST = "POST";
const baseUrl = "http://34.83.163.106:5000/vaartani/ai/api";
const ACTION_HANDLERS = {
  [POST]: (url, data) => axios.post(baseUrl + url, data),
};

export const setHeaders = (contentType, authToken) => {
  if (contentType) {
    axios.defaults.headers.post["Content-Type"] = contentType;
    axios.defaults.headers.post.Accept = "application/json";
  } else {
    delete axios.defaults.headers.post["Content-Type"];
  }
};

export const fetchUrl = (
  type,
  url,
  data,
  authToken = false,
  fetchBaseResponse = false,
  contentType,
  shouldRefetch
) => {
  setHeaders(contentType, authToken);
  const handler = ACTION_HANDLERS[type.toUpperCase()];
  return !fetchBaseResponse
    ? handler(url, data)
        .then((res) => Promise.resolve(res.data, res))
        .catch((error) => console.log(error, type))
    : handler(url, data).catch((error) =>
        console.log("sdadfaaaaaa-=-=-=--==---->", error, type)
      );
};

export const sellerDetails = (data) => (dispatch) => {
  new Promise((resolve, reject) => {
    console.log("sellerDetails -> sellerDetails", jsonData, data);
    const userData = jsonData.detailObjectList.find(
      (value) => value.business_details.seller_id === data.seller_node
    );
    dispatch({ type: "SELLER_DATA", payload: { detailObject: userData } });
    // console.log("sellerDetails -> userData", userData);
    // fetchUrl("POST", "/v1.0/form/amazonus/seller/allsheet/details", data)
    //   .then((res) => {
    //     console.log("sellerDetails -> res", res);
    //     dispatch({ type: "SELLER_DATA", payload: res });
    //     resolve(res);
    //   })
    //   .catch((e) => {
    //     reject(e);
    //   });
  });
};
