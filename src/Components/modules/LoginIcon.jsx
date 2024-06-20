import React, { useState } from 'react';
import login from '../img/log-in.svg';
import logout from '../img/log-out.svg';

function LoginIcon() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsLoggedIn(true);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setIsLoggedIn(false);
  };

  return (
    <div className="relative">
      {!isLoggedIn ? (
        <a href="/" onClick={handleLoginClick}>
          <img
            src={login}
            alt="login"
            className="w-12 cursor-pointer absolute right-0  transition-all duration-300"
          />f
        </a>
      ) : (
        <a href="/" onClick={handleLogoutClick}>
          <img
            src={logout}
            alt="logout"
            className="w-12 cursor-pointer transition-all duration-300"
          />
        </a>
      )}
    </div>
  );
}

export default LoginIcon;
