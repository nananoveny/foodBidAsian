import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../config/constants.js";
import useAuthenticate from "../stores/authenticate.js";
import { getRequest, postRequest } from "../utils/api.js";

export const getPosts = async () => await getRequest(API_ENDPOINT.POST);
export const useQueryPosts = () => useQuery(["posts"], getPosts);

export const commentPost = async (postId, comment, accessToken) =>
  await postRequest(API_ENDPOINT.POST + `/${postId}/comment`, {
    comment,
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  });
