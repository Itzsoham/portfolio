import Image from "next/image";

const Header = () => {
  return (
    <div className="mb-5 flex w-full flex-col items-start justify-between md:flex-row md:space-x-14">
      <div className="mt-6 flex flex-col md:w-3/4">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Soham Maury
        </h1>

        <div className="relative mb-5 flex-wrap items-center text-lg/7 text-zinc-700 dark:text-zinc-400">
          Full-Stack Developer crafting elegant solutions that inspire and
          deliver value.
        </div>
      </div>

      <div className="relative order-first shrink p-4 md:order-last md:p-4">
        <a
          href="https://bento.me/Itzsoham"
          target="__blank"
          className="relative z-5 block size-20 overflow-hidden rounded-sm bg-white shadow-xl ring-1 ring-slate-900/5"
        >
          <Image
            fill
            className="bg-gray-100 object-contain"
            src="/avatar4.jpg"
            sizes="20"
            alt="Soham Maury"
          />
        </a>
        <div className="z-0">
          <div className="absolute top-0 -right-12 left-0 h-px bg-slate-900/10 mask-[linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-zinc-300/10"></div>
          <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/10 mask-[linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-zinc-300/10"></div>
          <div className="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/10 mask-[linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-zinc-300/10"></div>
          <div className="absolute -top-2 right-0 -bottom-8 w-px bg-slate-900/10 mask-[linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] dark:bg-zinc-300/10"></div>
          <div className="absolute right-10 bottom-full -mb-px flex h-8 items-end overflow-hidden">
            <div className="-mb-px flex h-0.5 w-40 -scale-x-100">
              <div className="w-full flex-none bg-[linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)] blur-sm"></div>
              <div className="ml-[calc(-100%)] w-full flex-none bg-[linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)] blur-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
