import React, { useCallback, useState } from 'react';
import { createCommunity } from '../api/community.api';
import { uploadImage } from '../api/image.api';
import useModal from '../hooks/useModal';
import { useHistory } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import Spiner from '../components/Spiner';

const CommunityPage = () => {
  const { user } = useSession();
  const [isSubmit, setSubmit] = useState(false);
  const history = useHistory();
  const [image, setImage] = useState();
  const [banner, setBanner] = useState();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { toggle, ModalElement, updateModalAndToggle } = useModal();

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handleDescriptionChange = useCallback((event) => {
    setDescription(event.target.value);
  }, []);

  const handleImageChange = useCallback((event) => {
    setImage(event.target.files[0]);
  }, []);

  const handleBannerChange = useCallback((event) => {
    setBanner(event.target.files[0]);
  }, []);

  const handleErrorMessage = useCallback(
    (title, bodyMessage) => {
      updateModalAndToggle({
        title: title,
        bodyMessage: bodyMessage,
        callBackFunction: (status) => {
          toggle();
        },
      });
    },
    [toggle, updateModalAndToggle]
  );

  const submitHandler = useCallback(
    async (event) => {
      event.preventDefault();
      setSubmit(true);
      try {
        const { data: imageURL } = await uploadImage(image);
        const { data: bannerURL } = await uploadImage(banner);
        const result = await createCommunity(
          name,
          description,
          imageURL,
          bannerURL,
          user?.clientId
        );
        if (result) history.push(`c/${name}`);
      } catch (error) {
        handleErrorMessage('Plase try again', error.message);
      }
      setSubmit(false);
    },
    [banner, description, handleErrorMessage, history, image, name, user?.clientId]
  );

  return (
    <div className="bg-black">
      <ModalElement />
      <form onSubmit={submitHandler}>
        <div className="container mx-auto content-with-navbar">
          <div className="max-w-2xl flex-grow flex-shrink">
            <h2 className="text-xl font-medium leading-6 text-gray-200 pt-8 mb-8">
              Create a community
            </h2>
            <h3 className="text-xs font-bold text-gray-600 border-b-2 border-gray-600 mb-8 pb-1">
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
                <input
                  type="text"
                  onChange={handleNameChange}
                  className="text-white bg-black border border-gray-700 rounded box-border block w-full p-2 resize-none"
                />
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
                <textarea
                  onChange={handleDescriptionChange}
                  className="text-white bg-black border border-gray-700 rounded box-border block w-full p-2 resize-y"
                />
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
                          src={
                            image ? URL.createObjectURL(image) : 'https://via.placeholder.com/240'
                          }
                          className="object-cover h-28 w-full"
                          alt="Product"
                        />
                      </span>
                      <div className="items-center bg-black border-2 border-gray-200 flex justify-center right-2 w-9 h-9 bottom-2 absolute box-border rounded-full">
                        <label htmlFor="image" className="absolute">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300 cursor-pointer"
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
                        </label>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          accept="image/*"
                          className="opacity-0"
                          onChange={handleImageChange}
                          required
                        />
                      </div>
                    </label>
                  </div>
                  <div className="rounded h-full m-0 w-96 relative">
                    <label>
                      <span className="h-full w-full">
                        <img
                          src={
                            banner ? URL.createObjectURL(banner) : 'https://via.placeholder.com/240'
                          }
                          className="object-cover h-28 w-full"
                          alt="Product"
                        />
                      </span>
                      <div className="items-center bg-black border-2 border-gray-200 flex justify-center right-2 w-9 h-9 bottom-2 absolute box-border rounded-full">
                        <label htmlFor="banner" className="absolute">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-300 cursor-pointer"
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
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          name="banner"
                          id="banner"
                          className="opacity-0"
                          onChange={handleBannerChange}
                          required
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="items-start flex-row justify-between pt-0 pr-4 pb-4 flex">
              <div className="relative">
                <div className="flex-row-reverse flex items-center">
                  <div className="w-36 flex box-border">
                    <button
                      // type="submit"
                      className="grayscale-0 bg-gray-400 text-gray-900 rounded-full w-20 font-bold"
                    >
                      Create
                    </button>
                    <span className="ml-2">{isSubmit ? <Spiner /> : ''}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommunityPage;
