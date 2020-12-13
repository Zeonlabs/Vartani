import { fetchUrl } from "./Actiom";
import jsonData from "../Assets/Asin_Seller_only_seller_1.json";

export const sellerDetails = (data) => (dispatch) => {
  new Promise((resolve, reject) => {
    // console.log("sellerDetails -> sellerDetails", jsonData, data);
    const userData = jsonData.detailObjectList.find(
      (value) => value.business_details.seller_id === data.seller_node
    );
    dispatch({ type: "SELLER_DATA", payload: { detailObject: userData } });
    // console.log("sellerDetails -> userData", data);
    // fetchUrl("POST", "v1.0/form/amazonus/seller/livecrawler/jwttoken", data)
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

export const liveSeller = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    console.log("livesellerDetails -> userData", data);
    fetchUrl("POST", "v1.0/form/amazonus/seller/livecrawler/jwttoken", data)
      .then((res) => {
        console.log("livesellerDetails -> res", res);
        dispatch({ type: "LIVE_SELLER_DATA", payload: res.password });
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });

export const sellerDetail = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    console.log("livesellerDetails -> userData", data);
    fetchUrl("POST", "v1.0/form/amazonus/seller/livecrawler/details", data)
      .then((res) => {
        console.log("livesellerDetails -> res", res);
        const data = {
          res,
          live: true,
        };
        localStorage.setItem("liveUser", "live");
        dispatch({ type: "SELLER_DETAILS", payload: data });
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });

export const asinApi = (data) => (dispatch) =>
  new Promise((resolve, reject) => {
    fetchUrl("POST", "v1.0/form/amazonus/seller/livecrawler/asin/details", data)
      .then((res) => {
        console.log("livesellerDetails -> res", res);

        dispatch({ type: "Asin_Details", payload: res });
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
