import React from "react";
import { FaRegHeart, FaRegComments } from "react-icons/fa";

const IterativeBar = () => {
  return (
    <div className='bg-gray-100 w-full flex justify-around p-3 rounded-b-2xl'>
      <FaRegHeart size={25} />
      <FaRegComments size={25} />
    </div>
  );
};

export default IterativeBar;
