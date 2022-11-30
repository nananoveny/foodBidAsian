import Reac from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import CommentCard from "../../pages/Discussion/components/CommentCard";
import Comments from "../../pages/Discussion/components/Comments";
import CommentInput from "../CommentInput";
import IterativeBar from "../IterativeBar";
import { useQueryDetailPost } from "./hooks/useService";

const DetailDiscussionPost = () => {
  const { postId } = useParams();
  const { data } = useQueryDetailPost(postId);
  console.log(data?.data);
  const navigate = useNavigate();
  return (
    <>
      <div className='flex flex-col justify-center p-5  items-center space-y-10'>
        <span className='font-bold text-7xl cursor-pointer text-left'>
          FoodBid.ASEAN
        </span>
        <div>
          <img
            src='https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4'
            className='rounded-t-2xl cursor-pointer '
          />
          <IterativeBar />
        </div>
        <div className='flex  flex-col justify-center items-start px-5 space-y-5 w-1/2'>
          <span className='font-bold italic text-left px-5'>FoodBid.ASEAN</span>
          <div className='flex justify-start items-center px-5 space-x-2'>
            <span className='font-bold'>Create by: </span>
            <img
              src='https://s.meta.com.vn/img/thumb.ashx/Data/image/2021/08/03/avatar-doi-avatar-cap-avatar-doi-nguoi-that-dang-facebook-cuc-chat-29.jpg'
              alt=''
              height={40}
              width={40}
              className='rounded-full cursor-pointer'
              onClick={() => navigate("/user-wall")}
            />
            <span className='font-bold'>{data?.data?.owner.name}</span>
            <span className='font-bold'>{data?.data?.createdAt}</span>
          </div>
          <span className='text-left px-5'>{data?.data?.caption}</span>
        </div>
      </div>
      <Comments comments={data?.data?.comment} />
    </>
  );
};

export default DetailDiscussionPost;
