import { CgLogOut } from "react-icons/cg"; 
import { CgLogIn } from "react-icons/cg"; 
import React, { useState } from 'react';


function LoginIcon() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="relative">
      {/* {!isLoggedIn ? (
        <a href="/" onClick={handleLoginClick}>
          <img
            src={login}
            alt="login"
            className="w-12 cursor-pointer absolute right-0  transition-all duration-300"
          />
        </a>
      ) : (
        <a href="/" onClick={handleLogoutClick}>
          <img
            src={logout}
            alt="logout"
            className="w-12 cursor-pointer transition-all duration-300"
          />
        </a>
      )} */}
      {isLoggedIn  ? <CgLogIn color="white" size={25} className="cursor-pointer" onClick={handleLoginClick}/> : <CgLogOut color="white" size={25} className="cursor-pointer" onClick={handleLoginClick}/>}
    </div>
  );
}

export default LoginIcon;
