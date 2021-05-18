import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getCommunityByName } from '../api/community.api';
import Post from '../components/Post';
import Spiner from '../components/Spiner';
import '../styles/HomePageStyle.css';

const Community = () => {
  const [isLoading, setLoading] = useState(true);
  const [community, setCommunity] = useState();
  const [posts, setPosts] = useState();
  const location = useLocation();

  const renderPost = () => {
    if (posts.length === 0)
      return (
        <div className="text-white text-center mt-5 font-medium">
          Look like there is no post in this community be first one to post?
        </div>
      );

    return posts.map((post) => {
      return <Post post={post} />;
    });
  };

  useEffect(() => {
    const { pathname } = location;
    const communityName = pathname.slice(3, pathname.length);

    setLoading(true);
    const fetchCommunity = async () => {
      const { data } = await getCommunityByName(communityName);
      setCommunity(data.community);
      setPosts(data.posts);
      console.log(data);
      setLoading(false);
    };
    fetchCommunity();
  }, [location]);

  if (isLoading) {
    return (
      <div className="bg-black h-screen pt-4">
        <Spiner />
      </div>
    );
  }

  return (
    <div className="bg-black">
      <div className="flex-grow-0 flex-shrink-0 relative top-0 left-0 right-0 p-0 bg-gray-800">
        {/* <span className="h-48 pt-2 pr-4 pb-2 pl-4 block flex-row mr-auto ml-auto"> */}
        <img
          src={community.banner.location}
          className="h-48 pt-2 pr-4 pb-2 pl-4 block flex-row mr-auto ml-auto object-cover w-full"
          alt=""
        />
        {/* </span> */}
        <div className="max-w-5xl flex flex-col justify-between pr-4 pl-6 bg-gray-800 mx-auto">
          <div className="items-start flex mb-3 -mt-3">
            <img
              src={community.image.location}
              className="border-4 border-gray-200 inline-block h-20 w-20"
              alt=""
            />
            <div className="box-border inline-flex flex-grow flex-shrink pl-4 mt-6 relative">
              <div className="inline-block box-border">
                <h1 className="flex text-2xl font-bold leading-8 pr-1 pb-1 w-full text-gray-50">
                  {community.name}
                </h1>
                <h2 className="text-sm font-medium leading-5 text-gray-600 block">
                  s/{community.name}
                </h2>
              </div>
              <div className="w-24"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto content-with-navbar max-w-5xl">
        <div className="flex flex-row pt-6">
          <div className="w-2/3 pr-3">
            <div>
              {/* <div className="flex bg-gray-800 mb-4 p-2">
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
              </div> */}

              {renderPost()}

              {/* <div className="mt-6 border-solid w-full bg-gray-800">
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
                      <NavLink to="/post" className="ml-1 inline">
                        17 comments
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-1/3 pl-3">
            <div className="bg-gray-800 relative">
              <div className="text-xs font-bold tracking-tighter leading-3 rounded flex text-gray-400 pr-3 pl-3 ">
                <div className="text-base font-medium leading-5 pt-3">
                  <h2 className="text-sm leading-5 inline">About this Community</h2>
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
                    Created {community.createdAt}
                  </div>
                </div>
                <div className="justify-between mt-3 flex flex-row">
                  <div className="flex-shrink flex-grow">
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
        </div>
      </div>
    </div>
  );
};

export default Community;
