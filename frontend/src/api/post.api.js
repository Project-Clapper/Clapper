import axios from 'axios';

const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

const createPost = (title, body, createdBy, username, profileImage, communityId) => {
  return axios.post(`${api_endpoint}post/create`, {
    title,
    body,
    createdBy,
    username,
    profileImage,
    communityId,
  });
};

const votePost = (postId, clientId, vote) => {
  return axios.post(`${api_endpoint}post/vote`, { postId, clientId, vote });
};

export { createPost, votePost };
