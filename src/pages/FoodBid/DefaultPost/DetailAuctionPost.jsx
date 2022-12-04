import React from "react";
import auctionImage from "../../../assets/onlineauction.jpeg";

const DetailAuctionPost = () => {
  return (
    <>
      <div className='flex flex-col justify-center p-5  items-center space-y-10 h-screen'>
        <span className='font-bold text-7xl cursor-pointer text-left'>
          Auction
        </span>
        <div>
          <img
            src={auctionImage}
            className='rounded-t-2xl cursor-pointer h-96'
          />
        </div>
        <div className='flex  flex-col justify-center items-start px-5 space-y-5 w-1/2'>
          <div className='flex justify-start items-center px-5 space-x-2'>
            <span className='font-bold'>Packages under 5 billion VND:</span>
          </div>
          <span className='text-left px-5'>
            For the first time, bidding and auction will be applied
            simultaneously for the sake of farmers. To eliminate the affection
            of collectors or third-party buyers for black purposes. The
            end-users can make their buying decision directly through the
            auction system, where buyers bid for their proposals. The foremost
            mission of this ramification is that while the tender application is
            suited for the normal transaction, the auction process aims to end
            the paradox of supply exceeds demand amid the Covid-19 pandemic and
            future potential crisis.
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailAuctionPost;
