import axios from 'axios';

const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

const userCommunities = (clientId) => {
  return axios.get(`${api_endpoint}user/communities?clientId=${clientId}`);
};

const updateUser = (clientId, profileImage, bannerImage) => {
  return axios.post(`${api_endpoint}user/update`, { clientId, profileImage, bannerImage });
};

export { userCommunities, updateUser };
