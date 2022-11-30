import React from "react";
import Button from "./Forms/Button";

const CommentInput = () => {
  return (
    <div className='flex flex-col w-5/6 justify-center items-end space-y-3'>
      <textarea
        placeholder='Add comment'
        className='bg-[#fff] rounded-2xl w-full space-y-5 p-5'
      />
      <Button>SEND</Button>
    </div>
  );
};

export default CommentInput;
