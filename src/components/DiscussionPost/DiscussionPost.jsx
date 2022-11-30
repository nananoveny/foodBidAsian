import React from "react";
import { useNavigate } from "react-router-dom";

const DiscussionPost = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className='flex p-5  items-start'>
      <img
        src='https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4'
        className='rounded-2xl object-cover h-[300px] w-[300px] cursor-pointer'
      />
      <div className='flex flex-col justify-center items-start px-5 space-y-5 w-2/3'>
        <span
          className='font-bold py-5 px-10 mx-5 bg-[#eeebe3] rounded-lg text-3xl cursor-pointer'
          onClick={() => navigate(`/discussions/${post?.id}`)}
        >
          FoodBid.ASEAN
        </span>
        <span className='font-bold italic text-left px-5'>FoodBid.ASEAN</span>
        <div className='flex'>
          <span className='font-bold px-5'>Create at: </span>
          <span className='font-bold px-5'>{post?.createdAt}</span>
        </div>

        <span className='text-left px-5'>{post?.caption}</span>
      </div>
    </div>
  );
};

export default DiscussionPost;
