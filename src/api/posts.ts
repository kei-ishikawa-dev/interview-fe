import { client } from '@/client';
import type {
  CreatePostPayload,
  CreatePostResponse,
} from '@/types/create-post';
import type { FavoritePost } from '@/types/favorite-post';
import type { GetPostsPayload } from '@/types/get-posts';
import type { Post } from '@/types/post';

/**
 * 記事の一覧を取得
 */
export async function getPosts(): Promise<Post[]> {
  try {
    const response = await client.get<GetPostsPayload>('/getPosts');
    return response.data.data;
  } catch (error) {
    console.error('記事の取得でエラーが発生:', error);
    throw error; // エラーを再スローして呼び出し元で処理できるようにする
  }
}

/**
 * 記事の作成
 * @param payload
 * @returns
 */
export async function createPost(payload: CreatePostPayload): Promise<Post> {
  try {
    const response = await client.post<CreatePostResponse>(
      '/createPost',
      payload,
    );
    return response.data;
  } catch (error) {
    console.error('記事の作成でエラーが発生:', error);
    throw error; // エラーを再スローして呼び出し元で処理できるようにする
  }
}

/**
 * 記事のお気に入り登録/お気に入り解除
 */
export async function favoritePost(postId: number): Promise<void> {
  try {
    const payload: FavoritePost = { id: postId };
    await client.post<FavoritePost>(`/favorites`, payload);
  } catch (error) {
    console.error('記事のお気に入り登録でエラーが発生:', error);
  }
}
