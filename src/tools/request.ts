import axios, { Method } from "axios";

export const intance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "http" : "https",
  timeout: 10000,
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});

intance.interceptors.request.use(
  (conf) => {
    console.log(conf);
    conf.headers["token"] = sessionStorage.getItem("token");
    return conf;
  },
  (err) => {
    console.log(err);
  }
);

export default function request(
  url: string,
  method: Method,
  data: unknown
): Promise<void> {
  return new Promise((resolve, reject) => {
    // TODO get用params post 用data
    intance({
      url,
      method,
      data,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
