import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuthenticate from "../../stores/authenticate";

const RequestDiscussionPost = ({ post }) => {
  const navigate = useNavigate();
  const { isLogin, profile } = useAuthenticate((state) => state);

  const deletePost = async (postId, accessToken) => {
    await axios.delete(
      "https://freelance-job-be-production.up.railway.app/post/" + postId,
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  };

  const approvePost = async (postId, accessToken) => {
    await axios.post(
      "https://freelance-job-be-production.up.railway.app/post/post-request/" +
        postId +
        "/approve",
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  };

  console.log(post);
  return (
    <div className='space-y-2'>
      <div className='rounded overflow-hidden border w-[800px]  bg-white mx-3 md:mx-0 lg:mx-0'>
        <div className='w-2/3 flex justify-between p-3'>
          <div className='flex'>
            <div className='rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden'>
              <img
                src={
                  !!post?.owner?.avatar
                    ? post?.owner?.avatar
                    : "https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000"
                }
                alt='profilepic'
              />
            </div>
            <span className='pt-1 ml-2 font-bold text-sm'>
              {post?.owner?.firstName &&
                post?.owner?.firstName + " " + post?.owner?.lastName}
            </span>
          </div>
          <span className='px-2 hover:bg-gray-300 cursor-pointer rounded'>
            <i className='fas fa-ellipsis-h pt-2 text-lg'></i>
          </span>
        </div>
        <img
          src={
            !!post?.postpicture
              ? post?.postpicture
              : "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
          }
          className='w-full bg-cover'
        />
        <div className='px-3 pb-2'>
          <div className='pt-2'>
            <i className='far fa-heart cursor-pointer'></i>
            {/* <span className='text-sm text-gray-400 font-medium'>12 likes</span> */}
          </div>
          <div className='pt-1'>
            <div className='mb-2 text-sm'>
              <span className='font-medium mr-2'>
                {post?.owner?.firstName &&
                  post?.owner?.firstName + " " + post?.owner?.lastName}{" "}
              </span>
              {post?.content}
            </div>
          </div>
          <div
            className='text-sm mb-2 text-gray-400 cursor-pointer font-medium'
            onClick={() => navigate(`/discussions/${post?.id}`)}
          >
            View all comments
          </div>
          {/* <div className='mb-2'>
          <div className='mb-2 text-sm'>
            <span className='font-medium mr-2'>razzle_dazzle</span> Dude! How
            cool! I went to New Zealand last summer and had a blast taking the
            tour! So much to see! Make sure you bring a good camera when you go!
          </div>
        </div> */}
        </div>
      </div>
      <div className='space-x-2'>
        {profile?.isAdmin && (
          <button
            className='bg-red-600 p-2 px-5 rounded text-white'
            onClick={() => deletePost(post?.id, profile?.access_token)}
          >
            Delete
          </button>
        )}
        {profile?.isAdmin && (
          <button
            className='bg-green p-2 px-5 rounded text-white'
            onClick={() => approvePost(profile?.access_token)}
          >
            Approve
          </button>
        )}
      </div>
    </div>
  );
};

export default RequestDiscussionPost;
