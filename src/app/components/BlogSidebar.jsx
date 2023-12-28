import Link from "next/link";
import "./BlogSidebar.css";

const BlogSidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link href="/blog">Blog Home</Link>
        </li>
        <li>
          <Link>All Topics</Link>
        </li>
        <li className="blog-topic">
          <Link>References</Link>
        </li>
        <li className="blog-topic">
          <Link>Dev Logs</Link>
        </li>
        <li className="blog-topic">
          <Link>Reflections</Link>
        </li>
        <li className="blog-topic">
          <Link>Other</Link>
        </li>
        <li>
          <Link>All Languages</Link>
        </li>
        <li className="blog-topic">
          <Link>JavaScript</Link>
        </li>
        <li className="blog-topic">
          <Link>Python</Link>
        </li>
      </ul>
    </aside>
  );
};

export default BlogSidebar;
