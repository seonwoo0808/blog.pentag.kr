"use client";

import { Button } from "../ui/button";
import { ArrowUpIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

interface ButtonProps {
  size?: number;
  className?: string;
}

export const ScrollTop = ({ size = 16, className }: ButtonProps) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollTop}
      className={className}
    >
      <ArrowUpIcon width={size} height={size} />
    </Button>
  );
};

export const ScrollToComment = ({ size = 16, className }: ButtonProps) => {
  const scrollToGiscus = () =>
    document.querySelector(".giscus")?.scrollIntoView();
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToGiscus}
      className={className}
    >
      <ChatBubbleLeftIcon width={size} height={size} />
    </Button>
  );
};
