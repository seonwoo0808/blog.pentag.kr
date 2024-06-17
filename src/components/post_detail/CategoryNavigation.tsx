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
      <h5 className="text-lg font-bold text-center">
        <Link
          className="font-semibold text-pink-600 no-underline"
          href={`/${category}`}
        >
          {category}
        </Link>{" "}
        카테고리의 글
      </h5>
      <nav className="grid grid-cols-2 grid-rows-1 mt-8 gap-x-10">
        <div className="w-full bg-gray-200 py-2 px-4 rounded-lg">
          {prev ? (
            <Link
              className="no-underline flex items-center gap-x-3 overflow-hidden"
              href={prev.url}
            >
              <ArrowLeftCircleIcon className="h-12 text-indigo-500" />
              <div className="text-left overflow-hidden">
                <p className="text-gray-500 my-2 font-bold">이전 글</p>
                <p className="my-2 truncate">{prev.title}</p>
              </div>
            </Link>
          ) : (
            <div className="flex items-center gap-x-3">
              <ArrowLeftCircleIcon className="h-12 text-gray-500" />
              <div>
                <p className="text-gray-500 my-2 font-bold">이전 글</p>
                <p className="my-2">이전 글이 없습니다</p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full bg-gray-200 py-2 px-4 rounded-lg">
          {next ? (
            <Link
              className="text-right no-underline flex items-center justify-end gap-x-3 overflow-hidden"
              href={next.url}
            >
              <div className="text-right overflow-hidden">
                <p className="text-gray-500 my-2 font-bold">다음 글</p>
                <p className="my-2 truncate">{next.title}</p>
              </div>
              <ArrowRightCircleIcon className="h-12 text-indigo-500" />
            </Link>
          ) : (
            <div className="flex items-center justify-end gap-x-3">
              <div className="text-right">
                <p className="text-gray-500 my-2 font-bold">다음 글</p>
                <p className="my-2">다음 글이 없습니다</p>
              </div>
              <ArrowRightCircleIcon className="h-12 text-gray-500" />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
