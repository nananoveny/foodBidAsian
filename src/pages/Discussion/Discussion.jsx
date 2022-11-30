import axios from "axios";
import React, { useEffect, useState } from "react";
import DiscussionPost from "../../components/DiscussionPost/DiscussionPost";
import Layout from "../../components/layouts/Layout";
import { getPosts, useQueryPosts } from "./hooks/useService";

const Discusion = () => {
  const { data } = useQueryPosts();
  console.log(data?.data);
  return (
    <>
      <div className='flex justify-between w-3/3 h-screen'>
        <div>
          {data?.data?.map((post) => (
            <DiscussionPost post={post} />
          ))}
        </div>
        <div className='w-1/3'>
          <span className='font-bold text-3xl text-center'>TOP 10</span>
        </div>
      </div>
    </>
  );
};

export default Discusion;
