import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import foobBidBg from "../../assets/bgfoodBid.jpg";
import Post from "../../components/Post/Post";
import Layout from "../../components/layouts/Layout";
const Home = () => {
  return (
    <>
      <div className='pb-16'>
        <img src={foobBidBg} alt='' height={300} className />
      </div>
      <Post />
      <Post />
    </>
  );
};

export default Home;
