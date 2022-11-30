import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./hooks/useService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [userInfo, setUserRegister] = useState({
    username: "",
    password: "",
  });

  const handleCreateAccount = () => {
    if (!!userInfo.password && !!userInfo.username) {
      login(userInfo);
      toast.success("Success");
    } else {
      toast.error("Error");
    }
  };

  console.log(login(userInfo));
  return (
    <>
      <div>
        <div className='bg-grey-lighter min-h-screen flex flex-col'>
          <div className='container w-full mx-auto flex-1 flex flex-col items-center px-2'>
            <div className='flex flex-col items-center justify-center my-10 w-full'>
              <span className='text-5xl font-bold'>
                Wellcome to Food Bid Asian
              </span>
            </div>
            <div className='bg-white px-6 py-8 rounded shadow-md text-black max-w-sm'>
              <h1 className='mb-8 text-3xl text-center'>Login</h1>
              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='userName'
                placeholder='User Name'
                onChange={(e) =>
                  setUserRegister({ ...userInfo, username: e.target.value })
                }
              />

              <input
                type='password'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='password'
                placeholder='Password'
                onChange={(e) =>
                  setUserRegister({ ...userInfo, password: e.target.value })
                }
              />

              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1'
                onClick={handleCreateAccount}
              >
                Login
              </button>
            </div>

            <div className='mt-6 space-x-2'>
              <span className='text-red'>Already have an account ?</span>
              <span
                onClick={() => navigate("/signup")}
                className='cursor-pointer text-blue-700'
              >
                Create Account
              </span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
