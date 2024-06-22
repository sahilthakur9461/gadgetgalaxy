import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-10 max-w-md w-full text-center mx-auto z-1000">
      <form className="flex flex-col">
        <p className="text-white font-medium text-4xl mb-1">Login</p>
        <p className="text-white font-normal text-base mb-4">Login to your account</p>
        <div className="mb-5">
          <input
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            required
            placeholder="Username"
            id="username"
            name="username"
            type="text"
            className="bg-transparent border border-gray-700 p-4 text-lg rounded-lg text-gray-400 w-full shadow-inner focus:border-blue-600 outline-none"
          />
        </div>
        <div className="mb-5">
          <input
            required
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            className="bg-transparent border border-gray-700 p-4 text-lg rounded-lg text-gray-400 w-full shadow-inner focus:border-blue-600 outline-none"
          />
        </div>
        <button
          type="submit"
          className="p-4 rounded-lg bg-blue-600 text-white text-lg font-medium cursor-pointer transition-colors duration-300 hover:bg-blue-700"
        >
          Login
        </button>
        <div className="flex flex-col items-center mt-5 text-white text-base font-normal">
          <p>Don't have an account? <a href="#" className="text-blue-600 transition-colors duration-300 hover:text-blue-400">Sign Up</a></p>
          <p><a href="#" className="text-blue-600 transition-colors duration-300 hover:text-blue-400">Forgot password?</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
