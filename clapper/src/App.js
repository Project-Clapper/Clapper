import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
