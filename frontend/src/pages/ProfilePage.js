import { ArrowSmDownIcon, ArrowSmUpIcon, ChatAltIcon } from '@heroicons/react/outline';
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto content-with-navbar">
        <div className="flex flex-row pt-6">
          <div className="w-2/3 pr-3">
            <div>
              <div className="flex bg-gray-800 mb-4 p-2">
                <span className="py-0 px-4">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </span>
                <input
                  type="text"
                  className="bg-gray-700 h-9 mr-2 py-0 px-4 w-full"
                  placeholder="Create Post"
                />
              </div>

              <div className="mt-6 border-solid w-full bg-gray-800">
                <div className="flex">
                  <div className="w-10 p-2 bg-gray-800">
                    <ArrowSmUpIcon className="h-6 w-6 mx-auto text-gray-400 cursor-pointer" />
                    <p className="text-center text-gray-200">10</p>
                    <ArrowSmDownIcon className="h-6 w-6 mx-auto text-gray-400 cursor-pointer" />
                  </div>
                  <div className="w-full bg-gray-700">
                    <div className="p-2">
                      <div className="flex">
                        <img
                          className="h-5 w-5 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                        <p className="ml-2 text-sm text-gray-400">
                          <span className="font-semibold underline text-gray-200 cursor-pointer">
                            s/memes
                          </span>
                          <span> - posted by </span>
                          <span className="underline cursor-pointer">t/whatisusername</span>
                          <span> 4 hours ago</span>
                        </p>
                      </div>
                      <p className="mt-2 text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ad natus
                        nesciunt, aliquid labore assumenda consequuntur mollitia velit neque
                        corporis sed sint amet sequi eum eligendi voluptatibus doloremque architecto
                        earum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nulla
                        eius labore velit reiciendis mollitia consequuntur modi nemo? Atque non
                        pariatur nostrum quos expedita repellat quibusdam ullam commodi quas
                        perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium ad natus nesciunt, aliquid labore assumenda consequuntur mollitia
                        velit neque corporis sed sint amet sequi eum eligendi voluptatibus
                        doloremque architecto earum? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Saepe nulla eius labore velit reiciendis mollitia
                        consequuntur modi nemo? Atque non pariatur nostrum quos expedita repellat
                        quibusdam ullam commodi quas perspiciatis!Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Laudantium ad natus nesciunt, aliquid labore
                        assumenda consequuntur mollitia velit neque corporis sed sint amet sequi eum
                        eligendi voluptatibus doloremque architecto earum? Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Saepe nulla eius labore velit reiciendis
                        mollitia consequuntur modi nemo? Atque non pariatur nostrum quos expedita
                        repellat quibusdam ullam commodi quas perspiciatis! Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Laudantium ad natus nesciunt, aliquid
                        labore assumenda consequuntur mollitia velit neque corporis sed sint amet
                        sequi eum eligendi voluptatibus doloremque architecto earum? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Saepe nulla eius labore velit
                        reiciendis mollitia consequuntur modi nemo? Atque non pariatur nostrum quos
                        expedita repellat quibusdam ullam commodi quas perspiciatis!
                      </p>
                    </div>
                    <div className="text-sm mt-2 text-gray-400 cursor-pointer hover:bg-gray-300 w-32 pl-2">
                      <ChatAltIcon className=" inline w-4 h-4 my-auto " />
                      <p className="ml-1 inline">17 comments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 pl-3">
            <div className="bg-gray-800 relative z-0">
              <div className="rounded overflow-visible break-words p-3">
                <div className="h-24 left-0 top-0 w-full bg-gray-300 absolute">
                  <div className="h-full relative w-full">
                    <label className="cursor-pointer">
                      <span className="h-full w-full">
                        <div className="bg-hero-pattern h-full w-full bg-cover"></div>
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
                  </div>
                </div>
                <div className="rounded bg-white box-border h-20 -ml-1 mt-4 p-1 relative w-20">
                  <div className="h-full w-full relative">
                    <label>
                      <span className="h-full w-full">
                        <img
                          className="rounded"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </span>
                    </label>
                  </div>
                </div>
                <a className="text-xs font-medium leading-4 text-white mt-1">t/whatisusername</a>
                <div className="flex flex-wrap mt-3">
                  <div className="flex-grow flex-shrink mb-3">
                    <h5 className="font-medium text-sm leading-4 text-gray-200">follower</h5>
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
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <span className="text-xs font-normal leading-4 ml-1 text-gray-200">20</span>
                    </div>
                  </div>
                  <div className="flex-grow flex-shrink mb-3">
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
                    <a
                      className="w-full bg-gray-600 text-gray-200 rounded-full flex box-border justify-center text-sm leading-4 h-8 items-center"
                      role="button"
                    >
                      Create a Post
                    </a>
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
