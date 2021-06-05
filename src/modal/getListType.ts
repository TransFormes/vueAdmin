export interface GetListPage {
  pagedata: ListPage<GetList>;
}

interface ListPage<T> {
  current: number;
  orders: [];
  pages: number;
  searchCount: boolean;
  size: number;
  total: number;
  records: Array<T>;
}

export interface GetList {
  createTime: string;
  fashionBuyerName: unknown;
  id: string;
  isPut: number;
  leadNum: number;
  leadShotName: string;
  num: number;
  picture: string;
  remark: unknown;
  salePrice: number;
  singleNum: number;
  uniqueCode: string;
}
