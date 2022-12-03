import React from "react";

import Banner from "./components/Banner";

import ShortCut from "../../components/ShortCut/ShortCut.jsx";
const YouthForum = () => {
  return (
    <>
      <Banner />
      <div className='flex p-5'>
        <ShortCut />
      </div>
    </>
  );
};

export default YouthForum;
