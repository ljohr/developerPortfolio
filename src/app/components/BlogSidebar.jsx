import Link from "next/link";
import styles from "./BlogSidebar.module.css";

const BlogSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog Home</Link>
        </li>
        <li>
          <Link href="/blog">All Topics</Link>
        </li>
        <li className={styles.blogTopic}>
          <Link href="/blog">References</Link>
        </li>
        <li className={styles.blogTopic}>
          <Link href="/blog">Dev Logs</Link>
        </li>
        <li className={styles.blogTopic}>
          <Link href="/blog">Reflections</Link>
        </li>
        <li className={styles.blogTopic}>
          <Link href="/blog">Other</Link>
        </li>
        <li>
          <Link href="/blog">All Languages</Link>
        </li>
        <li className={styles.blogTopic}>
          <Link href="/blog">JavaScript</Link>
        </li>
        <li className={styles.blogTopic}>
          <Link href="/blog">Python</Link>
        </li>
      </ul>
    </aside>
  );
};

export default BlogSidebar;
