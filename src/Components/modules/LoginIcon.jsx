import { CgLogIn } from "react-icons/cg";
import React, { useState } from 'react';
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';

function LoginIcon() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="relative">
      {!isLoggedIn ? (
        <Link to='/' onClick={handleLoginClick}>
          <CgLogIn color="white" size={25} className="cursor-pointer" />
        </Link>
      ) : (
        <LuLogOut color="white" size={25} className="cursor-pointer" onClick={handleLoginClick} />
      )}
    </div>
  );
}

export default LoginIcon;
