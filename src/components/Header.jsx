import React from "react";
import Button from "./Forms/Button";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import useAuthenticate from "../stores/authenticate";
import MyAccount from "./MyAccount/MyAccount";

const Header = () => {
  const navigate = useNavigate();
  const { isLogin, logout } = useAuthenticate((state) => state);

  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <div className='flex items-center justify-between bg-[#fdfbf5] sticky top-0 z-50 border-2 '>
      <Logo />
      <div className='flex space-x-16'>
        <span
          className='font-bold cursor-pointer'
          onClick={() => navigate("/home")}
        >
          About Us
        </span>
        <span
          className='font-bold cursor-pointer'
          onClick={() => navigate("/foodbid")}
        >
          FoodBid
        </span>
        <span
          className='font-bold cursor-pointer'
          onClick={() => navigate("/home")}
        >
          Academy
        </span>
        <span
          className='font-bold cursor-pointer'
          onClick={() => navigate("/youth-forum")}
        >
          Eco-anxiety Youth Forum
        </span>
        <span
          className='font-bold cursor-pointer'
          onClick={() => navigate("/poll")}
        >
          Contact Us
        </span>
      </div>
      {!isLogin ? (
        <div className='flex space-x-5 pr-5'>
          <Button color='light' onClick={() => navigate("/login")}>
            Sign In
          </Button>
          <Button onClick={() => navigate("/signup")}>Sign Up</Button>
        </div>
      ) : (
        <div className='space-x-5 pr-5 '>
          {/* <Button onClick={handleLogout}>Log out</Button> */}
          <MyAccount />
        </div>
      )}
    </div>
  );
};

export default Header;
