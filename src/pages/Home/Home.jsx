import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import foobBidBg from "../../assets/bgfoodBid.jpg";
import Post from "../../components/Post/Post";
import Layout from "../../components/layouts/Layout";
import ShortCut from "../../components/ShortCut/ShortCut";

const Home = () => {
  return (
    <div className=''>
      <div className='pb-16'>
        <img src={foobBidBg} alt='' height={300} className />
      </div>
      <div className='flex space-x-5 pb-16 px-10'>
        <Post />
        <Post />
      </div>
      <div className='flex space-x-5 pb-16 px-10'>
        <ShortCut />
      </div>
    </div>
  );
};

export default Home;
