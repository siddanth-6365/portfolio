import IconCloud2 from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
 "tailwindcss",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "cloudflare",
  "cplusplus",
  "graphql",
  "mongodb",
  "svelte",
  "turborepo",
  "redis",
  "php",
  "mysql"

];

export function IconCloud() {
  return (
    <div className="relative flex h-full w-full max-w-[38rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-10">
      <IconCloud2 iconSlugs={slugs} />
    </div>
  );
}
