import axios from 'axios';
import { useEffect, useState } from 'react';
import type { Get, Article } from './types/get';
import { Frame } from './components/frame';
import { Create } from './components/create';
import type { CreatePayload } from './types/create';

const test: CreatePayload = {
  title: 'タイトル',
  body: 'テスト',
};

export default function App() {
  const [data, setData] = useState<Article[] | null>(null);

  const post = async () => {
    const response = await axios.post<CreatePayload, Article>(
      'https://asia-northeast1-praha-test.cloudfunctions.net/createPost',
      test,
    );

    setData([response, ...(data ?? [])]);
  };
  const handleClick = () => {
    post();
  };

  const get = async () => {
    const response = await axios.get<Get>(
      'https://asia-northeast1-praha-test.cloudfunctions.net/getPosts',
    );
    setData(response.data.data);
  };
  useEffect(() => {
    get();
  }, []);

  return (
    <>
      {data &&
        data.map((x) => (
          <Frame
            key={x.id}
            id={x.id}
            body={x.body}
            createdAt={x.createdAt}
            createdBy={x.createdBy}
            title={x.title}
            isFavorite={x.isFavorite}
          />
        ))}
      <Create onClick={handleClick} />
    </>
  );
}
