import React from "react";
import AuctionPost from "./DefaultPost/AuctionPost";
import BiddingPost from "./DefaultPost/BiddingPost";
import BuissinessMatching from "./DefaultPost/BuissinessMatching";
import { Animate, AnimateGroup } from "react-simple-animate";

const FoodBid = () => {
  return (
    <div className='flex flex-wrap h-screen justify-center'>
      <AnimateGroup play>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
          <AuctionPost />
        </Animate>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
          <BiddingPost />
        </Animate>
        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
          <BuissinessMatching />
        </Animate>
      </AnimateGroup>
    </div>
  );
};

export default FoodBid;
