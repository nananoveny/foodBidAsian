import React from "react";
import { useNavigate } from "react-router-dom";

const ShorCutCard = ({ imgUrl, title, navigator }) => {
  const navigate = useNavigate();
  return (
    <div
      className='max-w-sm bg-white border border-gray-200 cursor-pointer rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 w-80 h-80 mt-10 w-full hover:scale-105'
      onClick={() => navigate(navigator)}
    >
      <img
        className='rounded-t-lg h-3/5 w-full object-cover'
        src={imgUrl}
        alt=''
      />
      <div className='p-5 w-full flex flex-col justify-center items-center'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-[#42318d] dark:text-white'>
          {title}
        </h5>
        <button
          className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={() => navigate(navigator)}
        >
          GO TO
        </button>
      </div>
    </div>
  );
};

export default ShorCutCard;
