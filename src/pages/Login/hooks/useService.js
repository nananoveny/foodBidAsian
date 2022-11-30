import { API_ENDPOINT } from "../../../config/constants";
import { getRequest, postRequest } from "../../../utils/api";

export const login = async (userInfo) => {
  const res = await postRequest(API_ENDPOINT.LOGIN, { ...userInfo });
  localStorage.setItem("profile", res.data);
  console.log(res.data);
  return res;
};
