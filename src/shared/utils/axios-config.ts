import axios from "axios";

export const setupAxiosConfiguration = () => {
  axios.defaults.baseURL = `${import.meta.env.VITE_REACT_APP_BASE_URL}/api`;
}
