import { buildRequest } from "../api";
import qs from "qs";

// user
export const loginRequest = (data) => buildRequest("/user/login", {
  method: "POST",
}).request({data:data });

export const editProfileRequest =(data) =>  buildRequest("/user", {
  method: "PUT",
}).request({data: data});

export const registerRequest = (data) => buildRequest("/user/register", {
  method: "POST",
}).request({data: data});

// Manga
      //6
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

//discover_news
export const getNews = (params) => buildRequest("").request();


// Category
export const getCategories = (params) => {
  return params
    ? buildRequest(`/category?${qs.stringify(params)}`, {
        method: "GET",
      }).request()
    : buildRequest(`/category`, { method: "GET" }).request();
};
