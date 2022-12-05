import axios from "axios";
import React, { useEffect, useState } from "react";
import { Animate } from "react-simple-animate";
import DiscussionPost from "../../components/DiscussionPost/DiscussionPost";
import useAuthenticate from "../../stores/authenticate";

const UserPost = () => {
  const { profile } = useAuthenticate((state) => state);

  //   const { data } = useQueryGetUserInfo(profile?.user_id);
  //   console.log(data);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUserPost = async (id, accessToken) => {
      const res = await axios.get(
        "https://freelance-job-be-production.up.railway.app/post/user/" + id,
        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      setPosts(res?.data?.createdPosts);
    };
    getUserPost(profile?.user_id, profile?.access_token);
  }, []);
console.log(posts);
  return (
    <div className='flex flex-wrap items-center flex-col space-y-10 min-h-screen'>
      {posts?.map((post, index) => (
        <Animate
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          sequenceIndex={index}
          play
        >
          <DiscussionPost post={post} />
        </Animate>
      ))}
    </div>
  );
};

export default UserPost;
