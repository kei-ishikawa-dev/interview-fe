import type { Article } from '../types/get';

type FrameProps = Article;

export function Frame({
  body,
  title,
  createdAt,
  createdBy,
  isFavorite,
}: FrameProps) {
  return (
    <div className="m-3 rounded-xs">
      <div className="flex">
        <div>
          <div>{createdBy}</div>
          <div className="flex flex-col">
            <div>{createdAt}</div>
            <div>{title}</div>
          </div>

          <button className="ml-auto">
            {isFavorite ? 'お気に入り' : 'お気に入り解除'}
          </button>
        </div>
      </div>
      <div>{body}</div>
    </div>
  );
}
