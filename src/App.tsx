import { useEffect, useState } from 'react';
import { Create } from './components/create';

import type { Post } from './types/post';
import { PostFrame } from './components/post-frame';
import { createPost, getPosts } from './api/posts';

export default function App() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const handleClick = async (title: string, body: string) => {
    const createdPost = await createPost({ title, body });
    setPosts((prev) => [createdPost, ...(prev ?? [])]);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    void fetchPosts();
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-col">
        {posts && posts.map((x) => <PostFrame key={x.id} {...x} />)}
        <Create onClick={handleClick} />
      </div>
    </>
  );
}
