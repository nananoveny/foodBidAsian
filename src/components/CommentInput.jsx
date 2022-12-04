import React, { useState } from "react";
import Button from "./Forms/Button";
// import { commentPost } from "../service/useService.js";
import useAuthenticate from "../stores/authenticate";
import axios from "axios";
import { API_ENDPOINT } from "../config/constants";
const CommentInput = ({ postId }) => {
  const { profile } = useAuthenticate((state) => state);
  const [comment, setComment] = useState("");

  const commentPost = async (postId, comment, accessToken) => {
    try {
      await axios.post(
        "https://freelance-job-be-production.up.railway.app/" +
          API_ENDPOINT.POST +
          `/${postId}/comment`,
        {
          comment,
        },
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleSendComment = async (event) => {
    event.preventDefault();
    await commentPost(postId, comment, profile?.access_token);
    await window.location.reload();
  };
  return (
    <div className='flex flex-col w-5/6 justify-center items-end space-y-3'>
      <textarea
        placeholder='Add comment'
        className='bg-[#fff] rounded-2xl w-full space-y-5 p-5'
        onChange={(e) => setComment(e.target.value)}
      />
      <Button onClick={handleSendComment}>SEND</Button>
    </div>
  );
};

export default CommentInput;
