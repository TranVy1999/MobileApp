import axios from "axios";
require("dotenv").config();
// const BASE_URL = process.env.REACT_APP_BACKEND_URL
const BASE_URL = `http://demo6446725.mockable.io/manga1nui?fbclid=IwAR2hbWbtVhaWozfSvBotC8Gnc81nUce7XPSA4INR4UdiI6GA-7rsBFCV6iA`;
const baseHeader = {
  "Content-Type": "application/json",
};

export function buildRequest(url, requestConfig = {}) {
  const instance = axios.create({
    baseURL: BASE_URL + url,
    ...requestConfig,
    headers: {
      ...baseHeader,
      ...requestConfig.headers,
    },
    timeout: 30000,
  });

  // TO-DO: Intercept token expire error and retry
  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      console.log("Axios capture error and retry");
      return error;
    }
  );

  return {
    instance,
    request: async function (payload = {}) {
      payload.headers = payload.headers ?? {};

      // if (localstorage.get('autk')) {
      //   payload.headers = {
      //     Authorization: `Bearer ${localstorage.get('autk')}`,
      //     ...(payload?.headers ?? {}),
      //   }
      // }

      const res = await instance(payload);
      const { data: body, status: httpStatus } = res;

      if (body?.status === 500) {
        throw body;
      }
      return { body, httpStatus };
    },
  };
}
