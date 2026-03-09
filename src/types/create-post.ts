import type { Post } from './post';

export type CreatePostPayload = {
  title: string;
  body: string;
};

export type CreatePostResponse = Post;
