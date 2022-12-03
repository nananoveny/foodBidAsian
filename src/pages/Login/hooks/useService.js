import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../config/constants";
import { getRequest, postRequest } from "../../../utils/api";

export const signin = async (userInfo) =>
  await postRequest(API_ENDPOINT.LOGIN, { ...userInfo });

export const useQuerySignin = (userInfo) =>
  useQuery(["signin"], () => signin(userInfo));
