import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, password);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <form onSubmit={submitHandler}>
        <div className="p-10 rounded bg-gray-800">
          <h2 className="text-xl font-semibold">Sign up for Clapper</h2>
          <p>fill in username, email and password to join Clapper</p>

          <div className="mt-10">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              name="username"
              id="username"
              className="border-0 w-full border-b-2 bg-gray-800 p-2"
              onChange={handleUsernameChange}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-0 w-full border-b-2 bg-gray-800 p-2"
              onChange={handleUsernameChange}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-0 w-full border-b-2 bg-gray-800 p-2"
              onChange={handlePasswordChange}
            />
          </div>

          <div className="mt-16">
            <div className="flex justify-center items-center">
              <div>
                <button className="w-full font-semibold bg-transparent hover:border-gray-500 py-2 px-4 border-2 border-gold-500 hover:border-transparent rounded">
                  Sign up Now
                </button>
                <div className="text-sm text-center mt-5 block">
                  Already have an account? {''}
                  <NavLink to="/signin" className="underline text-gray-200">
                    SIGN IN
                  </NavLink>
                </div>
                <div className="text-center mt-4">
                  <NavLink to="/" className="underline text-gray-200">
                    Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
