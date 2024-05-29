"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  DocumentIcon,
  FolderIcon,
  HomeIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import IconPentagon from "@/components/icon/Pentagon";
import Link from "next/link";
import { CategoryDetail, Post } from "@/config/types";

const navigation = [
  {
    name: "All Posts",
    href: "/blog",
    icon: HomeIcon,
  },
  {
    name: "About Me",
    href: "https://pentag.kr/about",
    icon: UserCircleIcon,
  },
  {
    name: "Portfolio",
    href: "https://pentag.kr/portfolio",
    icon: FolderIcon,
  },
  {
    name: "Contact",
    href: "https://pentag.kr/contact",
    icon: UsersIcon,
  },
];
// const pinnedCategory = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar(props: {
  posts: Post[];
  pinnedCategory: CategoryDetail[];
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Transition show={sidebarOpen}>
        <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <IconPentagon className="h-8 w-auto text-slate-600" />
                    <h1 className="ml-4 text-lg py-1 font-regular text-white align-center">
                      <span className="font-bold">PENTAGON</span> DevLog
                    </h1>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  item.href === pathname
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                          Pinned Category
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {props.pinnedCategory.map((category) => (
                            <li key={category.dirName}>
                              <Link
                                href={`/blog/${category.dirName}`}
                                // className={classNames(
                                //   category.current
                                //     ? "bg-gray-800 text-white"
                                //     : "text-gray-400 hover:text-white hover:bg-gray-800",
                                //   "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                // )}
                                className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-400 hover:text-white hover:bg-gray-800"
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                  {category.dirName.slice(0, 1)}
                                </span>
                                <span className="truncate">
                                  {category.publicName}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center mt-3">
            <IconPentagon className="h-8 w-auto text-slate-600" />
            <h1 className="ml-4 text-lg py-1 font-regular text-white align-center">
              <span className="font-bold">PENTAGON</span> DevLog
            </h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  Pinned Category
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {props.pinnedCategory.map((category) => (
                    <li key={category.dirName}>
                      <Link
                        href={`/blog/${category.dirName}`}
                        // className={classNames(
                        //   team.current
                        //     ? "bg-gray-800 text-white"
                        //     : "text-gray-400 hover:text-white hover:bg-gray-800",
                        //   "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        // )}
                        className="group flex gap-x-0.5 rounded-md p-2 text-sm leading-6 font-semibold text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                          {category.dirName.slice(0, 1)}
                        </span>
                        <span className="ml-1.5">{category.publicName}</span>
                        <span className="font-medium">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            {/* recent posts */}
            <div className="text-xs font-semibold leading-6 text-gray-400 my-10">
              Recent Posts
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {props.posts.slice(0, 4).map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.categoryPath}/${post.slug}`}
                      className="text-gray-400 hover:text-white hover:bg-gray-800 group flex gap-x-3 rounded-md p-2 h-16"
                    >
                      <DocumentIcon
                        className="h-8 w-8 shrink-0 my-2  "
                        aria-hidden="true"
                      />
                      <div className="flex flex-col justify-center w-3/4">
                        <p className="truncate text-sm leading-6 font-semibold">
                          {post.title}
                        </p>
                        <p className="truncate text-xs leading-6 font-regular">
                          {post.dateString} / {post.categoryPublicName}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          PENTAGON DevLog
        </div>
      </div>
    </>
  );
}
