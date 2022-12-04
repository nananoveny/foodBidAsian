import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import foobBidBg from "../../assets/bgfoodBid.jpg";
import Post from "../../components/Post/Post";
import Layout from "../../components/layouts/Layout";
import ShortCut from "../../components/ShortCut/ShortCut";

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      <div className='pb-16'>
        <img src={foobBidBg} alt='' className='h-[800px] w-full object-cover' />
      </div>
      <div className='flex flex-col pb-16 px-5 w-1/2 space-y-10'>
        <div className='flex flex-col'>
          <span className='font-bold'>About us</span>
          <p className='text-justify'>
            FoodBid.ASEAN is an innovative e-commerce trading platform with the
            mission is to bring convenience to farmers who mainly depend on
            agricultural products, open opportunities to diversify and guarantee
            their production outputs by combining agriculture products, a
            transparent online bidding system, and supply chain for the sake of
            sustainable agriculture development with a simple, easy-to-use
            application.
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>What We Do?</span>
          <p className='text-justify'>
            The groundbreaking tool is designed to help farmers promote their
            agricultural products, look for their promising buyers, and thus,
            maximize profit transparently, actively, and effectively. In this
            way, producers can actively reference related market prices for
            their products to put their most desirable price and estimate their
            revenue while buyers have plenty of options to choose the best
            products without spending a ton of time searching online or go to
            the store.
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Why Work With Us?</span>
          <p className='text-justify'>
            The project was born to be not only a start-up smart focusing on
            training course aims to develop knowledge and practical skills to
            turn agriculture business ideas into reality by combining lectures,
            case studies, field trips, and experience sharing, but also provides
            a business tool for small business ventures for new and small
            businesses that are trying to grow and compete in the modern
            marketplace, including marketing your business, developing your
            brand, e-commerce skills, and social media marketing. Especially,
            empowering next-generation entrepreneurs with a series of training
            courses and summer school that will inspire and equip young people
            with the knowledge and skills to plan, launch, and run from a small
            agriculture-based business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
