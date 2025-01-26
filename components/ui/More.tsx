import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { text } from "stream/consumers";

const More = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      href={href}
      type="button"
      className="flex items-center justify-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
    >
      <span>{text}</span>
      <ArrowUpRight className="ml-1" size={20} />
    </Link>
  );
};

export default More;
