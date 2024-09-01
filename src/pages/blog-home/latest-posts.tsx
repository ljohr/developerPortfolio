import Link from "next/link";
import { format } from "path";
import { getBlogPosts } from "src/app/blog/utils";
import { formatDate } from "src/app/blog/utils";

const LatestPosts = () => {
  let latestPosts = getBlogPosts();
  return (
    <>
      <h1>Recent Posts</h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <article key={post.slug}>
            <Link href={"#"}>
              <h3>{post.metadata.title}</h3>
            </Link>
            <p>{post.metadata.summary}</p>
            <p>{formatDate(post.metadata.publishedAt)}</p>
          </article>
        ))}
    </>
  );
};

export default LatestPosts;
