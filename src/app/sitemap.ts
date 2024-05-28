import { MetadataRoute } from "next";

import { getSitemapPostList } from "@/lib/post";

import { baseDomain } from "@/config/const";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getSitemapPostList();
  const baseUrl = baseDomain;
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...postList,
  ];
}
