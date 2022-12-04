import React from "react";
import biddingImage from "../../../assets/Bidding.jpeg";

const DetailBiddingPost = () => {
  return (
    <>
      <div className='flex flex-col justify-center p-5  items-center space-y-10 '>
        <span className='font-bold text-7xl cursor-pointer text-left'>
          Bidding
        </span>
        <div>
          <img
            src={biddingImage}
            className='rounded-t-2xl cursor-pointer h-96'
          />
        </div>
        <div className='flex  flex-col justify-center items-start px-5 space-y-5 w-1/2'>
          <div className='flex justify-start items-center px-5 space-x-2'>
            <span className='font-bold'>Packages exceeding 5 billion VND:</span>
          </div>
          <span className='text-left px-5'>
            The distinctive figure that makes it remarkable is the combination
            of tender and auction. The proposal will be completely confidential
            until the final result. In contrast to the typical bidding process,
            the winning proposal must have the highest price. The purpose of
            separating it from auction for high-value packages is to avoid black
            activities on tendering. There will be no chance for buyers,
            consumers to cooperate or commit any crimes toward their benefits or
            to manipulate the market for revenue regardless of social and
            ethical facets.
          </span>
          <span className='text-left px-5'>
            The transaction will be guarantee by a term of contract penalty in
            which either side has to pay 8% of the total contract value if they
            fail to perform the signed contract (according to Vietnam tender
            law) and farmers will no longer being passive or losing their
            ability to make their deals that compatible to their investment,
            sweat, and tears.
          </span>
          <span className='text-left px-5'>
            The general process will follow the below-mentioned key stages:
          </span>
          <div className='ml-16'>
            <ol className='list-decimal'>
              <li>
                Agriculture products have to be examined and qualified according
                to a rigid quality control system conducted by professional
                experts.
              </li>
              <li>
                Qualified products will be submitted on the online tender system
                so that buyers can freely bid for them, reaching the peak of
                potential revenue for farmers.
              </li>
              <li>
                Finally, the supply chain/ logistic team will deliver them to
                the end clients.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBiddingPost;
