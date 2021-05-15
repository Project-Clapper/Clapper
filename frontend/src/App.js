import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import CreatePage from './pages/CreatePage';
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
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/setting">
          <SettingPage />
        </Route>
        <Route exact path="/create">
          <CreatePage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
