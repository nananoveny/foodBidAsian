import React from "react";
import Button from "./Forms/Button";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between bg-[#fdfbf5] sticky top-0 z-50 border-2'>
      <Logo />
      <div className='flex space-x-16'>
        <span
          className='font-bold cursor-pointer'
          onClick={() => navigate("/home")}
        >
          About
        </span>
        <span
          className='font-bold cursor-pointer'
          onClick={() => navigate("/discussions")}
        >
          Discussion
        </span>
        <span
          className='font-bold cursor-pointer'
          onClick={() => navigate("/poll")}
        >
          Poll
        </span>
        <span className='font-bold cursor-pointer'>Contact</span>
      </div>
      <div className='flex space-x-5 pr-5'>
        <Button color='light' onClick={() => navigate("/login")}>
          Sign In
        </Button>
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;
