import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env
      .VITE_API_URL,

  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    console.error(
      "API ERROR:",
      error
    );

    return Promise.reject(
      error.response?.data ||
        error
    );
  }
);

export default api;
