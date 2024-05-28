"use client";

import { useState } from "react";

import CopyLinkButton from "./CopyLinkButton";
import { ScrollToComment, ScrollTop } from "./TocButtons";
import { Button } from "@/components/ui/button";
import { useOutsideClick } from "@/hook/useOutsideClick";
import { cn } from "@/lib/utils";
import { BoltIcon } from "@heroicons/react/24/outline";

const FloatingButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible((prev) => !prev);
  const handleOutsideClick = () => setVisible(false);

  const buttonRef = useOutsideClick<HTMLButtonElement>(handleOutsideClick);

  return (
    <div className="group fixed bottom-4 right-4 xl:hidden">
      <div className="group relative flex flex-col-reverse">
        <Button
          size="icon"
          variant={visible ? "default" : "outline"}
          onClick={toggleVisible}
          ref={buttonRef}
          className={cn("absolute bottom-0 right-0 z-10 transition")}
        >
          <BoltIcon width={22} height={22} />
        </Button>
        <CopyLinkButton
          size={22}
          className={cn(
            "absolute bottom-0 right-0 transition",
            visible && "-translate-y-12"
          )}
        />
        <ScrollToComment
          size={22}
          className={cn(
            "absolute bottom-0 right-0 transition",
            visible && "-translate-y-24"
          )}
        />
        <ScrollTop
          className={cn(
            "absolute bottom-0 right-0 transition",
            visible && "-translate-y-36"
          )}
          size={22}
        />
      </div>
    </div>
  );
};

export default FloatingButton;
