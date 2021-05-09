import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-300">
      <div className="container mx-auto h-screen justify-items-center py-5 px-6">
        <div className="flex flex-row justify-center m-auto box-border ">
          <div className="w-full min-w-0">
            <div className="flex bg-white rounded mb-4 p-2">
              <a className="py-0 px-4">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </a>
              <input
                type="text"
                className="box-border block h-9 mr-2 py-0 px-4 bg-gray-200 flex-grow rounded-lg border-2 border-gray-300"
                placeholder="Create Post"
              />
            </div>
            <div className="flex bg-white rounded mb-4 p-2"></div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-80 ml-6"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
