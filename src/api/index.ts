import request from "./../tools/request";
import { GetListPage } from "./../modal/getListType";

export const login = (params: unknown): Promise<unknown> =>
  request("login", "POST", params);

export const getList = (params: unknown): Promise<GetListPage | null> =>
  request("test", "GET", params);
