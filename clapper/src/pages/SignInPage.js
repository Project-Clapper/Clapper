import React, { useState } from 'react';

function SignInPage({ Signin, error }) {
  const [details, setDetails] = useState({ name: '', email: '', password: '' });

  const submitHandler = (e) => {
    e.preventDefault();

    Signin(details);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <form onSubmit={submitHandler}>
        <div>
          <h2 className="font-sans text-white">Sign in</h2>
          {error != '' ? <div className="error">{error}</div> : ''}
          <div className="font-sans text-white">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="font-sans text-white">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setDetails({ ...details, email: e.target.value })}
              value={details.email}
            />
          </div>
          <div className="font-sans text-white">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setDetails({ ...details, password: e.target.value })}
              value={details.password}
            />
          </div>
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
