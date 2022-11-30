import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "./../../../config/constants";
import { getRequest } from "./../../../utils/api";

export const getDetailPost = async (postId) =>
  await getRequest(API_ENDPOINT.POST + "/" + postId);

export const useQueryDetailPost = (postId) =>
  useQuery(["detailPost"], () => getDetailPost(postId));
