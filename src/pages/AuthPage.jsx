import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form className="space-y-5">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md bg-gray-700 text-white focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="my-6 text-center text-gray-400">OR</div>

        <button
          type="button"
          className="w-full bg-white text-black py-3 rounded-md flex items-center justify-center gap-3 font-medium hover:bg-gray-200 transition"
        >
            <FcGoogle className='text-2xl'/>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-gray-300">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={toggleForm}
            className="text-green-400 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
