import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentInput from "../../../components/CommentInput";
import useAuthenticate from "../../../stores/authenticate";
import CommentCard from "./CommentCard";

const Comments = ({ comments }) => {
  const { isLogin } = useAuthenticate((state) => state);
  const { postId } = useParams();
  const navigate = useNavigate();
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center items-center space-y-5 bg-[#dac9a6] p-5 rounded-2xl w-4/6'>
        {isLogin ? (
          <CommentInput postId={postId} />
        ) : (
          <p
            className='font-bold cursor-pointer text-sig-green'
            onClick={() => navigate("/login")}
          >
            SIGN IN TO COMMENT
          </p>
        )}
        {comments?.map((comment) => (
          <CommentCard comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
