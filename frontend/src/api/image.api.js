import axios from 'axios';

const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

const uploadImage = (file) => {
  let data = new FormData();
  data.append('image', file);
  return axios.post(`${api_endpoint}image/uploadImage`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export { uploadImage };
