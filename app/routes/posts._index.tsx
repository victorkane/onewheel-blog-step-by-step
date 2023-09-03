import { Link } from "@remix-run/react";
export default function PostsRoute() {
  const posts = [
    {
      slug: "my-first-post",
      title: "My First Post",
    },
    {
      slug: "trail-riding-with-onewheel",
      title: "Trail Riding with Onewheel",
    },
  ];

  return (
    <main>
      <h1>The Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
