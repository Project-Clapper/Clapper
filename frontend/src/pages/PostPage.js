import { ArrowSmDownIcon, ArrowSmUpIcon, ChatAltIcon } from '@heroicons/react/outline';
import React from 'react';
import '../styles/HomePageStyle.css';

const PostPage = () => {
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
                    <div className="mt-6 mr-10 mb-6 ml-12 relative">
                      <div className="mb-1">
                        <span className="text-xs font-normal leading-4 text-gray-400 mr-1">
                          Comment as{' '}
                          <a className="text-xs font-normal leading-4 text-red-500">
                            Namesomething
                          </a>
                        </span>
                      </div>
                      <div className="rounded relative">
                        <textarea
                          className="text-gray-200 pt-2 pr-16 pl-4 border-gray-600 resize-y box-border block w-full bg-gray-800 rounded h-9 items-center h-full"
                          placeholder="Text"
                        ></textarea>
                      </div>
                    </div>
                    <div className="box-border pr-4 mt-4 mr-4 mb-0 ml-2 pb-4 p-2">
                      <div>
                        <div className="relative">
                          <div className="p-0">
                            <div>
                              <div className="pl-4 box-border relative w-full">
                                <div className="absolute bottom-0 left-0 top-0 z-2">
                                  <div className="box-border inline-block h-full align-top">
                                    <div className="h-full bottom-0 absolute box-border inline-block ml-1 align-top w-4"></div>
                                  </div>
                                </div>
                                <div className="mt-4 flex -ml-6 pt-2 pr-1 pb-0 pl-0 relative">
                                  <div className="self-start inline-block flex-grow-0 flex-shrink-0">
                                    <div className="flex">
                                      <img
                                        className="h-5 w-5 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                      />
                                      <p className="ml-2 text-sm text-gray-400">
                                        <span className="font-semibold underline text-gray-200 cursor-pointer">
                                          t/whatisusername
                                        </span>
                                        <span> - 4 hours ago</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-100">Nice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 pl-3">
            <div className="bg-gray-800 h-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
