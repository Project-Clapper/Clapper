import React, { useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { createPost } from '../api/post.api';
import { userCommunities } from '../api/user.api';
import Spiner from '../components/Spiner';
import { useSession } from '../contexts/SessionContext';
import useModal from '../hooks/useModal';

const CreatePage = () => {
  const history = useHistory();
  const { user } = useSession();
  const [communityName, setCommunityName] = useState();
  const [selectCommunity, setSelectCommunity] = useState();
  const [communities, setCommunities] = useState([]);
  const [isLoadCommunities, setLoadCommunities] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSelectCommunityChange = useCallback((event) => {
    event.target.childNodes.forEach((option) => {
      if (event.target.value === option.value) setCommunityName(option.innerHTML);
    });
    setSelectCommunity(event.target.value);
  }, []);

  const handleTitleChange = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const handleBodyChange = useCallback((event) => {
    setBody(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setErrorMessage('');

      if (!selectCommunity) return setErrorMessage('Please select community');
      if (title.length < 4) return setErrorMessage('Title must be at least 4 characters');
      if (body.length < 4) return setErrorMessage('Body must be at least 4 characters');

      try {
        const { clientId, username, profileImage } = user;
        await createPost(title, body, clientId, username, profileImage, selectCommunity);
        history.push(`c/${communityName}`);
      } catch (error) {
        setErrorMessage(error.message);
      }
    },
    [body, communityName, history, selectCommunity, title, user]
  );

  useMemo(() => {
    setLoadCommunities(true);
    const loadCommunities = async () => {
      const { clientId } = user;
      const { data } = await userCommunities(clientId);
      setCommunities(data.communities);
    };
    if (user) {
      loadCommunities();
      setLoadCommunities(false);
    }
  }, [user]);

  const renderOptions = () => {
    if (communities.length === 0) return <option disabled>You don't have community.</option>;

    return communities.map(({ communityId, name }, index) => {
      return (
        <option className="focus:outline-none outline-none" key={communityId} value={communityId}>
          {name}
        </option>
      );
    });
  };

  if (isLoadCommunities) {
    return (
      <div className="bg-black h-screen pt-4">
        <Spiner />
      </div>
    );
  }

  return (
    <div className="bg-black">
      <form onSubmit={handleSubmit}>
        <div className="container mx-auto content-with-navbar">
          <div className="max-w-2xl flex-grow flex-shrink pt-8 border-gray-600 mb-4">
            <h2 className="text-2xl font-medium leading-6 text-gray-200">Create Talk</h2>
          </div>
          <div className="flex mb-2 flex-row items-center mb-4">
            <p className="text-gray-500">Choose a community</p>
            <div className="ml-5 box-border h-10 rounded 0 bg-gray-800 text-gray-200">
              <select
                onChange={handleSelectCommunityChange}
                defaultValue="Please select"
                className="form-select w-60 pl-2 px-0.5 border-0 bg-gray-900 border-b-2 border-gray-700 focus:outline-none outline-none focus:ring-0"
              >
                <option value="">Please select one</option>
                {renderOptions()}
              </select>
            </div>
          </div>
          <div className="bg-gray-800 mb-4 rounded">
            <div className="mt-0 mr-0 mb-3 ml-0">
              <div className="items-stretch flex flex-row">
                <div className="text-gray-200 text-sm font-medium leading-4 box-border pt-4 pr-6 pb-4 pl-6 relative flex-grow flex-shrink text-center border-b-2 border-gray-600 flex justify-items-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
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
                  Talk
                </div>
              </div>
            </div>
            <div className="m-4">
              <div className="mb-2">
                <div className="relative">
                  <input
                    onChange={handleTitleChange}
                    className="text-gray-200 p-4 resize-none box-border block w-full bg-gray-900 rounded items-center border-0 focus:outline-none outline-none focus:ring-0"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="text-sm">
                <div className="relative">
                  <div className="rounded  relative bg-gray-900">
                    <div className="min-h-full resize-y">
                      <textarea
                        onChange={handleBodyChange}
                        className="text-gray-200 p-4 resize-y box-border block w-full bg-gray-900 rounded items-center border-0 focus:outline-none outline-none focus:ring-0"
                        placeholder="Text"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-start flex-row justify-between pt-0 pr-4 pb-4 pl-4 flex">
              <div className="">
                <div className="flex-row flex items-center">
                  <div className="ml-2 flex box-border">
                    <button className="grayscale-0 bg-gray-400 text-gray-900 rounded-full w-20 font-bold">
                      Post
                    </button>
                  </div>
                  <p className="ml-2 text-red-500">{errorMessage ? errorMessage : ''}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
