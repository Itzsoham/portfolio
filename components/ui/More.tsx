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
      <svg
        className="h-4 w-4 ml-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </Link>
  );
};

export default More;
