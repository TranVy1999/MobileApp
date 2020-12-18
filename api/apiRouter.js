import { buildRequest } from "../api";
import qs from "qs";

// user
export const loginRequest = buildRequest("/user/login", {
  method: "POST",
});

export const editProfileRequest = buildRequest("/user", {
  method: "PUT",
});

export const registerRequest = buildRequest("/user/register", {
  method: "POST",
});

// Manga
export const getMangas = (params) => buildRequest("").request();
// params
//   ? buildRequest(`/manga?${qs.stringify(params)}`, {
//       method: "GET",
//     }).request()
//   : buildRequest(`/manga`, {
//       method: "GET",
//     }).request();

// export const getMangaById = (id) =>
//   buildRequest(`/manga/detail/${id}`, { method: "GET" }).request();

// export const getRelatedManga = (id) =>
//   buildRequest(`/manga/related/${id}`, { method: "GET" }).request();
// export const createRating = (data) =>
//   buildRequest(`/manga/rating/${data?.mangaId}`).request({
//     method: "POST",
//     data,
//   });

// Category
export const getCategories = (params) => {
  return params
    ? buildRequest(`/category?${qs.stringify(params)}`, {
        method: "GET",
      }).request()
    : buildRequest(`/category`, { method: "GET" }).request();
};
