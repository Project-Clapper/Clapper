import axios from 'axios';

const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

const signUp = (email, username, password) => {
  return axios.post(`${api_endpoint}auth/signup`, { email, username, password });
};

const signIn = (username, password) => {
  return axios.post(`${api_endpoint}auth/signin`, { username, password });
};

const me = (token) => {
  return axios.get(`${api_endpoint}auth/me?token=${token}`);
};

export { signUp, signIn, me };
