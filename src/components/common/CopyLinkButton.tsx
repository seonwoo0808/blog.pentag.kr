"use client";

import { useState } from "react";

import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import useWatchTimeout from "@/hook/useWatchTimeout";
import { CheckIcon, XCircleIcon, LinkIcon } from "@heroicons/react/24/outline";

interface ButtonProps {
  size?: number;
  className?: string;
}

const CopyLinkButton = ({ size = 16, className }: ButtonProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  useWatchTimeout(copied, 3000, () => {
    setCopied(false);
  });

  const SuccessToastTitle = (
    <div className="flex items-center gap-3">
      <CheckIcon width={size} height={size} /> Successfully Copied
    </div>
  );

  const successToast = () => toast({ title: SuccessToastTitle });

  const FailToastTitle = (
    <div className="flex items-center gap-3">
      <XCircleIcon width={16} height={16} /> Copy Failed
    </div>
  );

  const failToast = () =>
    toast({ title: FailToastTitle, variant: "destructive" });

  const handleCopy = async () => {
    const url = window.document.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      successToast();
    } catch (e) {
      console.error(e);
      failToast();
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleCopy}
      className={className}
    >
      {copied ? (
        <CheckIcon width={size} height={size} />
      ) : (
        <LinkIcon width={size} height={size} />
      )}
    </Button>
  );
};

export default CopyLinkButton;
