import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../../config/constants";
import { getRequest } from "../../../utils/api";

export const getPosts = async () => await getRequest(API_ENDPOINT.POST);
export const useQueryPosts = () => useQuery(["posts"], getPosts);
