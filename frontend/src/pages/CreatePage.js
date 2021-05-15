import React from 'react';

const CreatePage = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto content-with-navbar">
        <div className="max-w-2xl flex-grow flex-shrink border-b-2 border-gray-600 mb-8 pb-1">
          <h2 className="text-xl font-medium leading-6 text-gray-200 p-8">Create a talk</h2>
        </div>
        <div className="flex mb-2 flex-row items-center">
          <div className="mr-4 relative box-border h-10 rounded border-2 border-gray-600 bg-gray-800 text-gray-200">
            <div className="flex items-center h-full pt-0 pr-2 pb-0 pl-2">
              <div className="flex pl-2">Choose a community</div>
              <div className="pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 mb-4 rounded">
          <div className="mt-0 mr-0 mb-3 ml-0">
            <div className="items-stretch flex flex-row">
              <button className="text-gray-200 text-sm font-bold leading-4 box-border pt-4 pr-6 pb-4 pl-6 relative flex-grow flex-shrink text-center border-2 border-gray-600 flex justify-items-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                Post
              </button>
            </div>
          </div>
          <div className="m-4">
            <div className="mb-2">
              <div className="relative">
                <textarea
                  className="text-gray-200 pt-1 pr-16 pl-4 border-2 border-gray-600 resize-none box-border block w-full bg-gray-900 rounded h-9 items-center"
                  placeholder="Title"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
