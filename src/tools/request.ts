import axios, { Method, AxiosRequestConfig } from "axios";
import { ResponseCode } from "./requestType";
import { ElMessage } from "element-plus";

interface PenddingUrl {
  url: string | undefined;
  f: () => void;
}

export const intance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://www.xuanfuai.com/"
      : "https://www.xuanfuai.com/",
  // timeout: 10000,
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});
const pendingUrl: Array<PenddingUrl> = [];

function emovePending(url: string | undefined) {
  for (let i = 0; i < pendingUrl.length; i++) {
    if (pendingUrl[i].url === url) {
      pendingUrl[i].f();
      pendingUrl.slice(i, 1);
    }
  }
}
const CancelToken = axios.CancelToken;

intance.interceptors.request.use(
  (conf) => {
    // conf.headers["token"] = sessionStorage.getItem("token");
    conf.headers["token"] = "pc|std|c63aee9559de4fd0926c";
    emovePending(conf.url);
    conf.cancelToken = new CancelToken((c) => {
      pendingUrl.push({
        url: conf.url,
        f: c,
      });
    });
    return conf;
  },
  (err) => {
    console.log(err);
  }
);

export default function request<T>(
  url: string,
  method: Method,
  data: unknown,
  responseType: AxiosRequestConfig["responseType"] = "json"
): Promise<T | null> {
  return new Promise((resolve, reject) => {
    const options: AxiosRequestConfig = {
      url,
      method,
      responseType,
    };
    if (method === "GET") {
      options.params = data;
    } else {
      options.data = data;
    }
    intance(options)
      .then((res) => {
        const data: ResponseCode<T> = res.data;
        if (data.code === 200) {
          resolve(data.multidata);
        } else {
          ElMessage({
            message: data.msg,
          });
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
