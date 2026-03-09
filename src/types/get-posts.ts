import type { Post } from './post';

export type GetPostsPayload = {
  paging: Paging;
  data: Post[];
};

export type Paging = {
  page: number;
  total: number;
};
