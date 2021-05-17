import axios from 'axios';

const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

const createCommunity = (name, description, image, banner, createdBy) => {
  return axios.post(`${api_endpoint}community/create`, {
    name,
    description,
    image,
    banner,
    createdBy,
  });
};

export { createCommunity };
