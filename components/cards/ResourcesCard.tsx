import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ResourcesCard({
  title,
  description,
  link,
  ...rest
}: Readonly<{
  title: string;
  description: string;
  link: string;
}>) {
  return (
    <Link
      href={link}
      className="group relative w-full rounded-xl border border-border bg-card p-4 transition hover:border-accent/40 hover:shadow-md"
      {...rest}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArrowUpRight className="absolute top-4 right-4 size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />

      <h3 className="text-left text-lg font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </Link>
  );
}
