import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className='bg-[#fff] rounded-2xl w-5/6 space-y-3'>
      <div className='flex space-x-5 items-center px-10 pt-2'>
        <img
          src='https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png'
          alt=''
          height={40}
          width={40}
          className='rounded-full'
        />
        <span className='font-bold text-gray-500'>{comment?.createdAt}</span>
      </div>
      <p className='px-10 font-bold pb-2'>{comment?.comment}</p>
    </div>
  );
};

export default CommentCard;
