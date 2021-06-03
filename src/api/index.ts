import request from "./../tools/request";

export const login = (params: unknown): Promise<void> =>
  request("login", "POST", params);
