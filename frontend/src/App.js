import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import SettingPage from './pages/SettingPage';
import CreatePage from './pages/CreatePage';
import CommunityPage from './pages/CommunityPage';
import PostPage from './pages/PostPage';
import Community from './pages/Community';
import CommunitiesPage from './pages/CommunitiesPage';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/community">
          <CommunitiesPage />
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
        <Route exact path="/create-community">
          <CommunityPage />
        </Route>
        <Route exact path="/c/:communityName/:postTitle">
          <PostPage />
        </Route>
        <Route path="/c">
          <Community />
        </Route>
      </Switch>
    </>
  );
};

export default App;
