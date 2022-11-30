import React from "react";
import CommentInput from "../../../components/CommentInput";
import CommentCard from "./CommentCard";

const Comments = ({ comments }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center items-center space-y-5 bg-[#dac9a6] p-5 rounded-2xl w-4/6'>
        <CommentInput />
        {comments?.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
