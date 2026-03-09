export type Get = {
  paging: Paging;
  data: Article[];
};

export type Paging = {
  page: number;
  total: number;
};

export type Article = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  createdBy: string;
  isFavorite: boolean;
};
