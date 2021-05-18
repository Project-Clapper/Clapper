import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useModal from '../hooks/useModal';
import { useSession } from '../contexts/SessionContext';
import Spiner from '../components/Spiner';

const SignInPage = () => {
  const { signIn, isLoading } = useSession();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { toggle, ModalElement, updateModalAndToggle } = useModal();

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const handleErrorMessage = useCallback(
    (title, bodyMessage) => {
      updateModalAndToggle({
        title: title,
        bodyMessage: bodyMessage,
        callBackFunction: (status) => {
          toggle();
        },
      });
    },
    [toggle, updateModalAndToggle]
  );

  const submitHandler = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await signIn(username, password);
      } catch (error) {
        const { message } = error?.response?.data;
        if (message === 'User is not confirmed.')
          return handleErrorMessage(
            'Please try agian',
            'Account is not verify yet. Please check your email'
          );
        handleErrorMessage('Please try agian', message);
      }
    },
    [handleErrorMessage, password, signIn, username]
  );

  return (
    <>
      <ModalElement />
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <form onSubmit={submitHandler}>
          <div className="p-10 rounded bg-gray-800">
            <h2 className="text-xl font-semibold">Sign in</h2>
            <p>Enjoy Clapper today!</p>

            <div className="mt-10">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
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
              <div className="flex justify-center">
                <div>
                  <button className="inline-block w-full font-semibold bg-transparent hover:border-gray-500 py-2 px-4 border-2 border-gold-500 hover:border-transparent rounded">
                    <div className="flex justify-center">
                      <p className="mx-auto">Sign in</p>
                      {isLoading ? <Spiner /> : ''}
                    </div>
                  </button>

                  <div className="text-sm text-center mt-5 block">
                    New to Clapper? {''}
                    <NavLink to="/signup" className="underline text-gray-200">
                      SIGN UP
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
    </>
  );
};

export default SignInPage;
