import { ArrowSmDownIcon, ArrowSmUpIcon, ChatAltIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import '../styles/HomePageStyle.css';
import { NavLink } from 'react-router-dom';
import { getPosts } from '../api/post.api';
import Spiner from '../components/Spiner';
import Post from '../components/Post';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const { data } = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const renderPost = () => {
    return posts.map((post) => {
      return (
        <div key={post.postId} className="mb-2">
          <Post post={post} />
        </div>
      );
    });
  };

  if (loading)
    return (
      <div className="bg-black h-screen pt-4">
        <Spiner />
      </div>
    );

  return (
    <div className="bg-black">
      <div className="container mx-auto content-with-navbar">
        <div className="flex flex-row pt-6">
          <div className="w-2/3 pr-3">{renderPost()}</div>
          <div className="w-1/3 pl-3">
            <div className="">
              <NavLink
                to="/create"
                className="w-full bg-gray-600 text-gray-200 rounded-full flex box-border justify-center text-sm leading-4 h-8 items-center"
                role="button"
              >
                Create a Post
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
