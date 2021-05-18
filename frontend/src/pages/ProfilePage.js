import { ArrowSmDownIcon, ArrowSmUpIcon, ChatAltIcon } from '@heroicons/react/outline';
import { UserIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import Spiner from '../components/Spiner';
import { useSession } from '../contexts/SessionContext';

const ProfilePage = () => {
  const { user, isLoading } = useSession();

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
          <div className="w-2/3 pr-3"></div>
          <div className="w-1/3 pl-3">
            <div className="bg-gray-800 relative z-0">
              <div className="rounded overflow-visible break-words p-3">
                <div className="h-24 left-0 top-0 w-full bg-gray-300 absolute">
                  <div className="h-full relative w-full">
                    <Link to="/setting">
                      <label className="cursor-pointer">
                        <span className="h-full w-full">
                          {user?.bannerImage?.location && (
                            <img
                              className="h-28 w-full object-cover"
                              src={user?.bannerImage?.location}
                              alt=""
                            />
                          )}
                        </span>
                        <div className="items-center rounded-full justify-center flex h-9 w-9 right-2 bottom-2 absolute border-2 bg-gray-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </label>
                    </Link>
                  </div>
                </div>
                <div className="rounded box-border h-20 -ml-1 mt-4  relative w-20">
                  {user?.profileImage?.location && (
                    <img
                      className="object-cover h-20 w-20 border-2 border-white"
                      src={user?.profileImage?.location}
                      alt=""
                    />
                  )}
                  {!user?.profileImage && (
                    <UserIcon className="object-cover h-20 w-20 border-2 border-white bg-gray-800" />
                  )}
                </div>
                <p className="text-xs font-medium leading-4 text-white mt-3">t/{user?.username}</p>
                <div className="flex flex-wrap mt-5">
                  <div className="flex-grow flex-shrink">
                    <h5 className="font-medium text-sm leading-4 text-gray-200">Clap Day</h5>
                    <div className="items-center flex mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-200"
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
                      <span className="text-xs font-normal leading-4 ml-1 text-gray-200">
                        February 30, 1988
                      </span>
                    </div>
                  </div>
                </div>
                <div className="justify-between mt-3 flex flex-row">
                  <div className="flex-shrink flex-grow">
                    <Link
                      to="create"
                      className="w-full bg-gray-600 text-gray-200 rounded-full flex box-border justify-center text-sm leading-4 h-8 items-center"
                      role="button"
                    >
                      Create a Post
                    </Link>
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

export default ProfilePage;
