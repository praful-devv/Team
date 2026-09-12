import axios from "axios";

export const api = axios.create({
  baseURL: "https://team-sync-backend-n78w.onrender.com/api",
  withCredentials: true,
});

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     let request = error.config;

//     if (error.response.status === 401 && !request._retry) {
//       request._retry = true;

//       try {
//         await api.get("/auth/get-accessToken");
//         return api(request);
//       } catch (error) {
//         window.location.href = "/";
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   },
// );
