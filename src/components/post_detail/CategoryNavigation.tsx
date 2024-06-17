import Link from "next/link";
import { Post } from "@/config/types";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

interface Props {
  category: string;
  prev: Post | null;
  next: Post | null;
}

export function CategoryNavigation({ category, prev, next }: Props) {
  return (
    <div className="mb-24">
      <h5 className="text-lg font-bold dark:text-gray-200 text-center">
        {category} 카테고리의 글
      </h5>
      <nav className="flex justify-between mt-8 gap-x-10">
        <div className="w-1/2 bg-gray-200 py-2 px-4 rounded-lg">
          {prev ? (
            <Link
              className="no-underline flex items-center gap-x-3"
              href={prev.url}
            >
              <ArrowLeftCircleIcon className="h-12 text-indigo-400" />
              <div>
                <p className="text-gray-500 my-2 ml-2 font-bold">이전 글</p>
                <p className="my-2 text-ellipsis overflow-hidden truncate">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-x-3">
              <ArrowLeftCircleIcon className="h-12 text-gray-400" />
              <div>
                <p className="text-gray-500 my-2 ml-2 font-bold">이전 글</p>
                <p className="my-2">이전 글이 없습니다</p>
              </div>
            </div>
          )}
        </div>
        <div className="w-1/2 bg-gray-200 py-2 px-4 rounded-lg">
          {next ? (
            <Link
              className="text-right no-underline flex items-center justify-end gap-x-3"
              href={next.url}
            >
              <div className="text-right">
                <p className="text-gray-500 my-2 ml-2 font-bold">다음 글</p>
                <p className="my-2 text-ellipsis overflow-hidden truncate">
                  {next.title}
                </p>
              </div>
              <ArrowRightCircleIcon className="h-12 text-indigo-400" />
            </Link>
          ) : (
            <div className="flex items-center justify-end gap-x-3">
              <div className="text-right">
                <p className="text-gray-500 my-2 ml-2 font-bold">다음 글</p>
                <p className="my-2">다음 글이 없습니다</p>
              </div>
              <ArrowRightCircleIcon className="h-12 text-gray-400 " />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
