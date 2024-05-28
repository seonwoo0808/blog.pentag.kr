/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Post } from "@/config/types";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";

interface Props {
  post: Post;
}

const howLongAgo = (dateString: string) => {
  // dateString: 2024년 02월 26일 parse
  // 년, 개월 ,일 전 단위로 재구성
  const now = new Date();
  const postDate = new Date();
  postDate.setFullYear(parseInt(dateString.slice(0, 4)));
  postDate.setMonth(parseInt(dateString.slice(6, 8)) - 1);
  postDate.setDate(parseInt(dateString.slice(11, 13)));
  const diff = now.getTime() - postDate.getTime();

  const day = 1000 * 60 * 60 * 24;
  const month = day * 30;
  const year = month * 12;

  if (diff > year) {
    return `${Math.floor(diff / year)}년 전`;
  } else if (diff > month) {
    return `${Math.floor(diff / month)}개월 전`;
  } else {
    return `${Math.floor(diff / day)}일 전`;
  }
};

export const PostHeader = ({ post }: Props) => {
  return (
    <header className="mt-14 text-center">
      <h1 className="mb-5 text-3xl">{post.title}</h1>
      <p className="mb-5 text-lg text-gray-500 dark:text-gray-400">
        {post.desc}
      </p>
      <div className="mb-3 text-base">
        <Link
          href={`/blog/${post.categoryPath}`}
          className="font-semibold text-pink-600 no-underline underline-offset-4 hover:underline"
        >
          {post.categoryPublicName}
        </Link>
      </div>
      <div className="flex justify-center gap-3 text-sm text-gray-500 dark:text-gray-400">
        <a href="https://hits.seeyoufarm.com">
          <img
            src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fblog.pentag.kr%2F${post.categoryPath}%2F${post.slug}&count_bg=%237A42F1&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=%EC%A1%B0%ED%9A%8C%EC%88%98&edge_flat=false`}
            alt=""
            width={70}
            height={10}
          />
        </a>
        <div className="flex items-center gap-1">
          <CalendarDaysIcon className="w-3.5" />
          <span>
            {post.dateString} ({howLongAgo(post.dateString)})
          </span>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-3.5" />
          <span>{post.readingMinutes}분</span>
        </div>
      </div>
      <hr className="my-5" />
    </header>
  );
};
