import React, { useCallback, useEffect, useState } from 'react';
import { ArrowSmUpIcon } from '@heroicons/react/outline';
import { useHistory, useParams } from 'react-router';
import { getPostFromId } from '../api/post.api';
import Comment from '../components/Comment';
import Post from '../components/Post';
import Spiner from '../components/Spiner';
import { useSession } from '../contexts/SessionContext';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { joinCommunity } from '../api/community.api';
import '../styles/HomePageStyle.css';
import { createComment } from '../api/comment.api';

const PostPage = () => {
  const history = useHistory();
  const { user } = useSession();
  const { postTitle } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [text, setText] = useState();
  const [comments, setComment] = useState([]);
  const [post, setPost] = useState();
  const [community, setCommunity] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const { data } = await getPostFromId(postTitle);
      if (data.comments) setComment(data.comments);
      setPost(data.post);
      setCommunity(data.community);
      setLoading(false);
    };
    fetchPost();
  }, [postTitle]);

  const handleComment = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const { postId } = post;
        const { clientId, username, profileImage } = user;
        await createComment(postId, text, clientId, username, profileImage);
        history.go(0);
      } catch (error) {
        console.log(error);
      }
    },
    [history, post, text, user]
  );

  const handleTextChange = useCallback((event) => {
    setText(event.target.value);
  }, []);

  const handleJoinCommunity = useCallback(async () => {
    try {
      await joinCommunity(user?.clientId, community?.communityId, community?.name);
      history.go(0);
    } catch (error) {
      console.log(error);
    }
  }, [community?.communityId, community?.name, history, user?.clientId]);

  const renderCommunityOptions = () => {
    const { followers } = community;

    let isMember;
    followers.forEach((clientId) => {
      if (clientId === user?.clientId) isMember = true;
    });

    if (!user)
      return (
        <NavLink
          to="/signin"
          className="w-full bg-gray-600 text-gray-200 rounded-full flex box-border justify-center text-sm leading-4 h-8 items-center"
          role="button"
        >
          Sign in
        </NavLink>
      );

    if (isMember) {
      return (
        <NavLink
          to="/create"
          className="w-full bg-gray-600 text-gray-200 rounded-full flex box-border justify-center text-sm leading-4 h-8 items-center"
          role="button"
        >
          Create a Post
        </NavLink>
      );
    }

    return (
      <div
        type="button"
        onClick={handleJoinCommunity}
        className="w-full bg-gray-600 text-gray-200 rounded-full flex box-border justify-center text-sm leading-4 h-8 items-center"
        role="button"
      >
        Join Community
      </div>
    );
  };

  const renderComment = () => {
    console.log(comments);
    if (comments.length === 0) return;
    return comments.map((comment) => {
      return (
        <div key={comment.commentId} className="mb-3">
          <Comment comment={comment} />
        </div>
      );
    });
  };

  if (isLoading)
    return (
      <div className="bg-black h-screen pt-4">
        <Spiner />
      </div>
    );

  return (
    <div className="bg-black">
      <div className="container mx-auto content-with-navbar">
        <div className="flex flex-row pt-6">
          <div className="w-2/3 pr-3">
            <Post post={post} />
            <div className="">
              <div className="border-solid w-full bg-gray-800">
                <div className="flex">
                  <div className="w-12 p-2 bg-gray-800">
                    <ArrowSmUpIcon className="h-6 w-6 mx-auto text-gray-400 cursor-pointer opacity-0" />
                  </div>
                  <div className="w-full bg-gray-700 border-t-2 border-gray-800">
                    {user && (
                      <div className="p-2 relative">
                        <form onSubmit={handleComment}>
                          <div className="mb-3">
                            <span className="text-xs ml-auto font-normal leading-4 text-gray-400">
                              Comment as <span className="text-indigo-300">{user.username}</span>
                            </span>
                          </div>
                          <div className="rounded relative">
                            <textarea
                              onChange={handleTextChange}
                              className="text-gray-200 border-gray-600 resize-y block w-full bg-gray-800 rounded items-center p-3 h-full"
                              placeholder="Text"
                              required
                            />
                          </div>
                          <div className="w-full text-right">
                            <button className="bg-gray-400 p-1 text-xs mt-2 rounded-md text-gray-300">
                              Comment
                            </button>
                          </div>
                        </form>
                      </div>
                    )}

                    {renderComment()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 ">
            <img src={community.banner.location} alt="" className="w-full object-cover h-10" />
            <div className="bg-gray-800 pl-3">
              <div className="bg-gray-800 relative">
                <div className="text-xs font-bold tracking-tighter leading-3 rounded flex text-gray-400 pr-3 pl-3 ">
                  <div className="text-base font-medium leading-5 pt-3">
                    <div className="flex">
                      <img
                        src={community.image.location}
                        className="w-8 rounded-full mr-2"
                        alt=""
                      />
                      <h2 className="my-auto text-xl font-medium text-white leading-5 inline">
                        {community.name}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="pt-3 pr-3 pb-3 pl-3">
                  <div className="mb-2 relative">
                    <hr />
                    <div className="text-sm leading-5 font-normal text-gray-50 pt-2">
                      {community.description}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-normal leading-4 flex flex-row text-gray-400 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                        />
                      </svg>
                      Created {moment(community.createdAt).format('LL')}
                    </div>
                  </div>
                  <div className="justify-between mt-3 flex flex-row">
                    <div className="flex-shrink flex-grow">{renderCommunityOptions()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
