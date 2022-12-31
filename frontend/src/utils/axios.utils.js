import axios from "axios";

const client = axios.create({ baseURL: `http://localhost:5000` });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "easybus"
  )}`;

  const onSuccess = (response) => {
    if (response.status === 200 && response.data.success) {
      return response.data.data;
    }
    return response;
  };
  const onError = (error) => {
    if (
      error.response?.status === 403 &&
      error.response?.data?.success === false
    ) {
      throw new Error(error.response?.data?.message);
    }
    if (
      error.response?.status === 401 &&
      error.response?.data?.success === false
    ) {
      throw new Error(error.response?.data?.message);
    }
    if (
      error.response?.status === 404 &&
      error.response?.data?.success === false
    ) {
      throw new Error(error.response?.data?.message);
    }

    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
