import { formatDateString, getInitials } from '@/lib/utils';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import type { Post } from '../types/post';
import { favoritePost } from '@/api/posts';

/**
 * 記事の枠組みコンポーネント
 * @param param0
 * @returns
 */
export function PostFrame({
  id,
  body,
  title,
  createdAt,
  createdBy,
  isFavorite,
}: Post) {
  const handleFavoriteClick = (id: number) => {
    // TODO: お気に入り登録/解除のAPIを呼び出し後、一覧の再取得したほうが良いか
    favoritePost(id);
  };

  return (
    <div className="my-3 w-full rounded-[8px] border border-[#0E11331A] px-12 py-9.5">
      <div className="item-start ml-4 flex gap-4">
        <Avatar className="size-13">
          {/* 画像URLがないため、AvatarFallbackが表示される */}
          <AvatarImage src="" />
          <AvatarFallback className="bg-[#8E7CFF] text-white">
            {getInitials(createdBy)}
          </AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-col">
          <div className="min-w-0 flex-1">
            <div className="flex">
              <div className="flex flex-col">
                <div className="mb-1 text-xs text-[#9D9DA7]">
                  {formatDateString(createdAt)}
                </div>
                <p className="mb-4 text-[20px] leading-tight font-bold text-[#090B22]">
                  {title}
                </p>
              </div>

              <Button
                className="ml-auto h-9 w-30 shrink-0 rounded-sm bg-[#4F36F4] px-6 py-2.5 text-sm text-white"
                onClick={() => handleFavoriteClick(id)}
              >
                {isFavorite ? 'お気に入り解除' : 'お気に入り'}
              </Button>
            </div>
          </div>
          <p className="text-[14px] text-[#090B22]">{body}</p>
        </div>
      </div>
    </div>
  );
}
