import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../config/constants";
import { getRequest, postRequest } from "../../../utils/api";

export const getUserInfo = async (id) =>
  await getRequest(API_ENDPOINT.USER + "/" + id);

export const useQueryGetUserInfo = (id) =>
  useQuery(["userInfo"], () => getUserInfo(id));
