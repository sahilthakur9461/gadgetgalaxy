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
  
      {isLoggedIn  ? <CgLogIn color="white" size={25} className="cursor-pointer" onClick={handleLoginClick}/> : <CgLogOut color="white" size={25} className="cursor-pointer" onClick={handleLoginClick}/>}
    </div>
  );
}

export default LoginIcon;
