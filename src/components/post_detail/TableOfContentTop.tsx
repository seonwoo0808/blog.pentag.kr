import Link from "next/link";

import { HeadingItem } from "@/config/types";
import { cn } from "@/lib/utils";

interface Props {
  toc: HeadingItem[];
}

const TableOfContentTop = ({ toc }: Props) => {
  if (toc.length === 0) return null;

  return (
    <nav className="xl:hidden">
      <h2 id="table-of-contents-top" className="text-2xl font-bold">
        On this page
      </h2>
      <ul className="my-2">
        {toc.map((item) => (
          <li
            key={item.link}
            className={cn(
              item.indent === 1 && "ml-4",
              "my-0 py-1 text-lg font-semibold"
            )}
          >
            <Link
              href={item.link}
              className="underline-offset-4 hover:text-pink-600"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </nav>
  );
};

export default TableOfContentTop;
