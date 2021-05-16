import React from 'react';

const CommunityPage = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto content-with-navbar">
        <div className="max-w-2xl flex-grow flex-shrink">
          <h2 className="text-xl font-medium leading-6 text-gray-200 p-8">Create a community</h2>
          <h3 className="text-xs font-bold leading-3 text-gray-600 border-b-2 border-gray-600 mb-8 pb-1">
            Community Info
          </h3>
          <div className="flex-col flex mb-8">
            <div className="flex flex-col mr-2 max-w-full">
              <h3 className="text-base font-medium leading-5 text-gray-200 flex mb-1">
                Community Name
              </h3>
              <p className="font-normal text-gray-600 text-xs leading-4">
                Tell everyone to know your community name
              </p>
            </div>
            <div className="items-start mt-3 flex-col flex-grow justify-end flex">
              <textarea className="bg-black border border-gray-700 rounded box-border block w-full p-2 resize-none"></textarea>
            </div>
          </div>
          <div className="flex-col flex mb-8">
            <div className="flex flex-col mr-2 max-w-full">
              <h3 className="text-base font-medium leading-5 text-gray-200 flex mb-1">
                Description
              </h3>
              <p className="font-normal text-gray-600 text-xs leading-4">
                Tell more about your community.
              </p>
            </div>
            <div className="items-start mt-3 flex-col flex-grow justify-end flex">
              <textarea className="bg-black border border-gray-700 rounded box-border block w-full p-2 resize-y"></textarea>
            </div>
          </div>
          <h3 className="text-xs font-bold leading-3 text-gray-600 border-b-2 border-gray-600 mb-8 pb-1">
            Image
          </h3>
          <div className="flex-col flex mb-8">
            <div className="flex flex-col mr-2 max-w-full">
              <h3 className="text-base font-medium leading-5 text-gray-200 flex mb-1">
                Community Profile and Banner image
              </h3>
              <p className="font-normal text-gray-600 text-xs leading-4">
                Image must be .jpg or .png format
              </p>
            </div>
            <div className="items-start mt-3 flex-col flex-grow justify-end flex">
              <div className="flex h-28">
                <div className="rounded mt-0 mr-3 mb-0 ml-0 w-28 relative">
                  <label>
                    <span className="h-full w-full">
                      <img
                        className="rounded"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </span>
                    <div className="items-center bg-black border-2 border-gray-200 flex justify-center right-2 w-9 h-9 bottom-2 absolute box-border rounded-full">
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
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="rounded h-full m-0 w-96 relative">
                  <label>
                    <span className="h-full w-full">
                      <div className="bg-hero-pattern h-full w-full bg-cover"></div>
                    </span>
                    <div className="items-center bg-black border-2 border-gray-200 flex justify-center right-2 w-9 h-9 bottom-2 absolute box-border rounded-full">
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
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="items-start flex-row justify-between pt-0 pr-4 pb-4 flex">
            <div className="relative">
              <div className="flex-row-reverse flex items-center">
                <div className="w-20 ml-2 flex box-border">
                  <button className="grayscale-0 bg-gray-400 text-gray-900 rounded-full w-20 font-bold">
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
