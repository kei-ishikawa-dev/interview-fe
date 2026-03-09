import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './ui/dialog';
import { X } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

type CreateProps = {
  onClick: (title: string, body: string) => Promise<void>;
};

/**
 * 記事作成コンポーネント
 */
export function Create({ onClick }: CreateProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async () => {
    await onClick(title, body);
    setOpen(false);

    // TODO: Xボタンで閉じたときも文字の値をリセットしたほうが良いか？
    setTitle('');
    setBody('');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* TODO: 画面右下の絶対位置にした方が良いか？ */}
        <Button className="ml-auto size-15 rounded-full bg-[#4F36F4] text-[24px]">
          +
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="mx-12.5 mt-10 min-w-232 overflow-hidden rounded-lg border bg-white p-0 shadow-xl"
      >
        <div className="relative min-w-0 px-12 py-10">
          <DialogClose asChild>
            <Button
              className="absolute top-4 right-4 rounded-sm bg-white p-1 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-600"
              aria-label="閉じる"
            >
              <X className="size-6" />
            </Button>
          </DialogClose>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="post-title"
                className="ml-5.75 text-[16px] text-[#090B22]"
              >
                タイトル
              </Label>
              <Input
                id="post-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="タイトルをここに入力"
                className="h-11 w-full min-w-0 rounded-sm border-[#0E11331A] pl-5.75 text-base text-[14px] shadow-none"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="post-body"
                className="ml-5.75 text-[16px] text-[#090B22]"
              >
                本文
              </Label>
              <Textarea
                id="post-body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="本文をここに入力"
                className="h-37 w-full min-w-0 resize-none rounded-sm border-[#0E11331A] pl-5.75 text-base text-[14px] leading-8 wrap-anywhere shadow-none"
              />
            </div>

            <div className="flex justify-end pt-1">
              <Button
                type="button"
                onClick={handleSubmit}
                className="h-12 min-w-40 rounded-md bg-[#4F36F4] px-10 text-lg font-medium text-white"
              >
                投稿
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
