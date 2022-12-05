import axios from "axios";
import React, { useEffect, useState } from "react";
import { Animate } from "react-simple-animate";
import RequestDiscussionPost from "../../components/DiscussionPost/DiscussionPost";
import useAuthenticate from "../../stores/authenticate";

const RequestPost = () => {
  const { profile } = useAuthenticate((state) => state);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostRequest = async (accessToken) => {
      const res = await axios.get(
        "https://freelance-job-be-production.up.railway.app/post-request",

        {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        }
      );
      console.log(res);
      setPosts(res?.data);
    };
    getPostRequest(profile?.access_token);
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
          <RequestDiscussionPost post={post} />
        </Animate>
      ))}
    </div>
  );
};

export default RequestPost;
