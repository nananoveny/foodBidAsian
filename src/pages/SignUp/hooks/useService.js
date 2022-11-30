import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../config/constants";
import { getRequest, postRequest } from "../../../utils/api";

export const signUp = async (userInfo) => {
  const res = await postRequest(API_ENDPOINT.SIGN_UP, { ...userInfo });
  return res;
};
