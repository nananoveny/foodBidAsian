import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../config/constants";
import { getRequest, postRequest } from "../../../utils/api";

export const getPosts = async () => await getRequest(API_ENDPOINT.POST);
export const useQueryPosts = () => useQuery(["posts"], getPosts);

export const commentPost = async (postId, comment) =>
  await postRequest(API_ENDPOINT.POST + `/${postId}/comment`, { comment });
