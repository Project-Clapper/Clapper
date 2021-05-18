import axios from 'axios';

const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

const createComment = (postId, text, clientId, username, profileImage) => {
  return axios.post(`${api_endpoint}comment/create`, {
    postId,
    text,
    clientId,
    username,
    profileImage,
  });
};

export { createComment };
