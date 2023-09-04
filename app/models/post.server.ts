import { json } from "@remix-run/node";
export async function getPosts() {
  const posts = [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "trail-riding-with-onewheel",
      title: "Trail Riding with Onewheel",
    },
    {
      slug: "obelisk-in-buenos-aires",
      title: "Obelisk in Buenos Aires",
    },
  ];
  return posts;
}
