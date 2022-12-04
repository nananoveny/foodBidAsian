import axios from "axios";
import React, { useEffect, useState } from "react";
import DiscussionPost from "../../components/DiscussionPost/DiscussionPost";
import Layout from "../../components/layouts/Layout";
import Banner from "./components/Banner";
import { getPosts, useQueryPosts } from "./hooks/useService";
import { Animate, AnimateGroup } from "react-simple-animate";
import ShortCut from "../../components/ShortCut/ShortCut.jsx";
import CreatePost from "./components/CreatePost";
const Discusion = () => {
  const { data } = useQueryPosts() ?? {};
  console.log(data);
  return (
    <div className='flex justify-center flex-wrap items-center flex-col space-y-10'>
      <CreatePost />
      {data?.data ??
        []?.map((post, index) => (
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

export default Discusion;
