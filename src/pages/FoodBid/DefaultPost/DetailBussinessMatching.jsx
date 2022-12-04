import React from "react";
import bussinessMatchingImage from "../../../assets/businessMatching.jpeg";

const DetailBussinessMatching = () => {
  return (
    <>
      <div
        className='flex flex-col justify-center p-5  items-center space-y-10 min-h-screen'
        onClick={() => navigate("/foodbid/bussiness-matching")}
      >
        <span className='font-bold text-7xl cursor-pointer text-left'>
          BussinessMatching
        </span>
        <div>
          <img
            src={bussinessMatchingImage}
            className='rounded-t-2xl cursor-pointer h-96'
          />
        </div>
        <div className='flex  flex-col justify-center items-start px-5 space-y-5 w-1/2'>
          <div className='flex justify-start items-center px-5 space-x-2'>
            {/* <span className='font-bold'>Packages under 5 billion VND:</span> */}
          </div>
          <span className='text-left px-5'>
            FoodBid.ASEAN also offers business matching for agriculture produce
            via our interacting platform. Users have full access to their
            potential customers’ information including produce catalogs,
            manufacturing capacity, production timeline, as well as financial
            status and experience in performing previous business transactions.
            Therefore, an engaging community will be established, where users
            can connect with, interact, and learn from others. By allowing
            farmers and consumers to reach out to each other and necessary
            resources, FoodBid.ASEAN aims to solve the problem of information
            asymmetry and imbalance supply and demand, thereby facilitating
            economic growth.
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailBussinessMatching;
