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

const getCommunities = () => {
  return axios.get(`${api_endpoint}community/get`);
};

const getCommunityByName = (name) => {
  return axios.get(`${api_endpoint}community/find?name=${name}`);
};

export { createCommunity, getCommunities, getCommunityByName };
