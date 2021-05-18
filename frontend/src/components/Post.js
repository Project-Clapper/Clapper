import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowSmDownIcon, ArrowSmUpIcon, ChatAltIcon } from '@heroicons/react/outline';
import { NavLink, useLocation } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import { UserIcon } from '@heroicons/react/solid';
import moment from 'moment';
import { votePost } from '../api/post.api';

const Post = ({ post }) => {
  const { user, isLoading } = useSession();
  const { title, body, vote, username, createdAt, postId, profileImage } = post;
  const [isAlreadtVote, setAlreadyVote] = useState(false);
  const [userVote, setUserVote] = useState('');
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);
  const location = useLocation();

  useMemo(() => {
    console.log(vote.length);
    if (vote.length === 0) return;

    let upvoteNumber = 0;
    let downVoteNumber = 0;

    vote.forEach((record) => {
      if (user) {
        if (record.clientId === user?.clientId) {
          setAlreadyVote(true);
          setUserVote(record.vote);
        }
      }
      if (record.vote === 'upvote') upvoteNumber += 1;
      if (record.vote === 'downvote') downVoteNumber += 1;
    });

    setUpvote(upvoteNumber);
    setDownvote(downVoteNumber);
  }, []);

  const updateVote = useCallback(
    (userVoteString) => {
      try {
        votePost(postId, user?.clientId, userVoteString);
      } catch (error) {
        console.log(error);
      }
    },
    [postId, user?.clientId]
  );

  const handleUpvote = useCallback(async () => {
    if (userVote === 'upvote') {
      setUpvote(upvote - 1);
      setAlreadyVote(false);
      setUserVote('');
      updateVote('');
      return;
    }

    if (userVote === '') {
      setUpvote(upvote + 1);
      setAlreadyVote(true);
      setUserVote('upvote');
      updateVote('upvote');
      return;
    }

    setUpvote(upvote + 1);
    setDownvote(downvote - 1);
    setAlreadyVote(true);
    setUserVote('upvote');
    updateVote('upvote');
  }, [downvote, updateVote, upvote, userVote]);

  const handleDownvote = useCallback(async () => {
    if (userVote === 'downvote') {
      setDownvote(downvote - 1);
      setAlreadyVote(false);
      setUserVote('');
      updateVote('');
      return;
    }

    if (userVote === '') {
      setDownvote(downvote + 1);
      setAlreadyVote(true);
      setUserVote('downvote');
      updateVote('downvote');
      return;
    }

    setUpvote(upvote - 1);
    setDownvote(downvote + 1);
    setAlreadyVote(true);
    setUserVote('downvote');
    updateVote('downvote');
  }, [downvote, updateVote, upvote, userVote]);

  if (isLoading) return <div className="mt-6 border-solid w-full bg-gray-800 h-60"></div>;

  console.log(upvote, downvote);

  return (
    <div className="mb-6 border-solid w-full bg-gray-800">
      <div className="flex">
        <div className="w-10 p-2 bg-gray-800">
          <ArrowSmUpIcon
            onClick={handleUpvote}
            className={
              isAlreadtVote && userVote === 'upvote'
                ? 'bg-gray-500 rounded h-6 w-6 mx-auto text-green-500 cursor-pointer'
                : 'h-6 w-6 mx-auto text-gray-400 cursor-pointer'
            }
          />
          <p className="text-center text-gray-200" unselectable="on">
            {upvote - downvote}
          </p>
          <ArrowSmDownIcon
            onClick={handleDownvote}
            className={
              isAlreadtVote && userVote === 'downvote'
                ? 'bg-gray-500 rounded h-6 w-6 mx-auto text-red-500 cursor-pointer'
                : 'h-6 w-6 mx-auto text-gray-400 cursor-pointer'
            }
          />
        </div>
        <div className="w-full bg-gray-700">
          <div className="p-2">
            <div className="flex">
              {profileImage?.location && (
                <img
                  className="h-5 w-5 object-cover rounded-full"
                  src={profileImage?.location}
                  alt=""
                />
              )}
              {!profileImage?.location && <UserIcon className="h-5 w-5 rounded-full" />}
              <p className="ml-2 text-sm text-gray-400">
                {!location.pathname.includes('/c/') && (
                  <span className="font-semibold underline text-gray-200 cursor-pointer">
                    s/memes -
                  </span>
                )}
                <span> posted by </span>
                <span className="underline cursor-pointer">t/{username}</span>
                <span> {moment(createdAt).fromNow()}</span>
              </p>
            </div>
            <p className="mt-2 text-lg text-gray-100">{title}</p>
            <p className="mt-2 text-gray-100">{body}</p>
          </div>
          <div className="text-sm mt-2 text-gray-400 cursor-pointer hover:bg-gray-300 w-32 pl-2">
            <ChatAltIcon className=" inline w-4 h-4 my-auto " />
            <NavLink to="/post" className="ml-1 inline">
              17 comments
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
