import Image from "next/image";

const Header = () => {
  return (
    <div className="mb-10 flex w-full flex-col items-start justify-between  md:flex-row md:space-x-14">
      <div className="mt-6 flex flex-col md:w-3/4">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Soham Maury
        </h1>

        <div className="relative mb-5 flex-wrap items-center leading-7 text-zinc-700 dark:text-zinc-400">
          Building
          <a
            className={
              "mx-1 inline-block bg-gray-100 px-2 py-0 font-bold dark:bg-zinc-700  dark:text-white"
            }
            href="https://aceternity.com"
            target="__blank"
          >
            Aceternity
          </a>
          ,
          <a
            className={
              "mx-1 inline-block bg-gray-100 px-2 py-0 font-bold dark:bg-zinc-700 dark:text-white"
            }
            href="https://userogue.com"
            target="__blank"
          >
            Rogue
          </a>
          other
          <span className="cursor-pointer font-bold text-zinc-800 dark:text-zinc-200">
            {" "}
            cool things
          </span>
        </div>
        <p className="text-zinc-600 dark:text-zinc-500">
          Senior Software Engineer building SaaS products and web apps. Find me
          on{" "}
          <a
            href="https://twitter.com/mannupaaji"
            className=" group relative inline-flex overflow-hidden font-bold  dark:text-zinc-400"
            target="__blank"
          >
            <span className="relative">twitter</span>
          </a>{" "}
          for tech updates and memes.
        </p>
      </div>

      <div className="relative order-first shrink p-4 md:order-last md:p-4">
        <a
          href="https://twitter.com/mannupaaji"
          target="__blank"
          className="relative  z-[5] block size-20 overflow-hidden rounded bg-white  shadow-xl ring-1 ring-slate-900/5"
        >
          <Image
            fill
            className="bg-gray-100 object-contain"
            src="/avatar.jpg"
            sizes="20"
            alt="Manu Arora"
          />
        </a>
        <div className="z-0">
          <div className="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-zinc-300/[0.1]"></div>
          <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-zinc-300/[0.1]"></div>
          <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-zinc-300/[0.1]"></div>
          <div className="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-zinc-300/[0.1]"></div>
          <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
            <div className="-mb-px flex h-[2px] w-40 -scale-x-100">
              <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              <div className="ml-[calc(-100%)] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
