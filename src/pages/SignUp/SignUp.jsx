import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "./hooks/useService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [userRegister, setUserRegister] = useState({
    name: "",
    username: "",
    password: "",
    repassword: "",
    mail: "",
    role: "USER",
  });

  const handleCreateAccount = () => {
    if (
      userRegister.password === userRegister.repassword &&
      !!userRegister.password
    ) {
      signUp(userRegister);
      toast.success("Success");
      // ;
    } else {
      toast.error("Error");
    }
  };
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
              <h1 className='mb-8 text-3xl text-center'>Sign up</h1>
              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='fullname'
                placeholder='Full Name'
                onChange={(e) =>
                  setUserRegister({ ...userRegister, name: e.target.value })
                }
              />

              <input
                type='text'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='username'
                placeholder='User Name'
                onChange={(e) =>
                  setUserRegister({ ...userRegister, username: e.target.value })
                }
              />

              <input
                type='email'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='email'
                placeholder='Email'
                onChange={(e) =>
                  setUserRegister({ ...userRegister, mail: e.target.value })
                }
              />

              <input
                type='password'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='password'
                placeholder='Password'
                onChange={(e) =>
                  setUserRegister({ ...userRegister, password: e.target.value })
                }
              />
              <input
                type='password'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                name='confirm_password'
                placeholder='Confirm Password'
                onChange={(e) =>
                  setUserRegister({
                    ...userRegister,
                    repassword: e.target.value,
                  })
                }
              />

              <button
                type='submit'
                className='w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1'
                onClick={handleCreateAccount}
              >
                Create Account
              </button>
            </div>

            <div className='mt-6 space-x-2'>
              <span className='text-red'>Already have an account ?</span>
              <span
                onClick={() => navigate("/login")}
                className='cursor-pointer text-blue-700'
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;
