import React, { useState } from "react";
import useAuthenticate from "../../stores/authenticate.js";

const MyAccount = () => {
  const [toggle, setToggle] = useState(false);
  const { logout } = useAuthenticate((state) => state);
  const handleLogout = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <div className='relative'>
      <img
        src='https://img.freepik.com/free-icon/user_318-790139.jpg?w=2000'
        alt=''
        onClick={() => setToggle(!toggle)}
        className='rounded-full cursor-pointer'
        width={40}
      />

      {toggle ? (
        <div class='z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0'>
          <div class='py-3 px-4 text-sm text-gray-900 dark:text-white'>
            <div>Bonnie Green</div>
            <div class='font-medium truncate'>name@flowbite.com</div>
          </div>
          <ul class='py-1 text-sm text-gray-700 dark:text-gray-200'>
            <li>
              <a
                href='#'
                class='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href='#'
                class='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                Earnings
              </a>
            </li>
          </ul>
          <div class='py-1'>
            <button
              className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyAccount;
