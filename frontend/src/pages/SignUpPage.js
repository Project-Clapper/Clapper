import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Spiner from '../components/Spiner';
import { useSession } from '../contexts/SessionContext';
import useModal from '../hooks/useModal';

const SignUpPage = () => {
  const { signUp, isLoading } = useSession();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { toggle, ModalElement, updateModalAndToggle } = useModal();

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

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
        await signUp(email, username, password);
      } catch (error) {
        let { message } = error.response.data;
        handleErrorMessage('Please try agian', message);
      }
    },
    [email, handleErrorMessage, password, signUp, username]
  );
  return (
    <>
      <ModalElement />
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <form onSubmit={submitHandler}>
          <div className="p-10 rounded bg-gray-800">
            <h2 className="text-xl font-semibold">Sign up for Clapper</h2>
            <p>Join Clapper now!</p>

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
                onChange={handleEmailChange}
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
                    <div className="flex justify-center">
                      Sign up
                      {isLoading ? <Spiner /> : ''}
                    </div>
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
    </>
  );
};

export default SignUpPage;
