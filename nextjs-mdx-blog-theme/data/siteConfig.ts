import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://nextjs-mdx-blog-theme.vercel.app",
  siteName: "Alex Carpenter",
  siteDescription:
    "Starter template for a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ]
};
export default siteConfig;
