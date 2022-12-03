import React, { useState } from "react";
import Button from "./Forms/Button";
import { commentPost } from "../service/useService.js";
import useAuthenticate from "../stores/authenticate";
const CommentInput = ({ postId }) => {
  const { profile } = useAuthenticate((state) => state);
  const [comment, setComment] = useState("");
  const handleSendComment = (event) => {
    event.preventDefault();
    commentPost(postId, comment, profile?.access_token);
  };
  console.log(profile);
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
