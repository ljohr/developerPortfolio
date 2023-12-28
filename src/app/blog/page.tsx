import Navbar from "../components/Navbar";
import BlogSidebar from "../components/BlogSidebar";

import styles from "./BlogHome.module.css";

const BlogContent = () => {
  return (
    <main className={styles.blogHome}>
      <div className={styles.blogTitle}>
        <h1>Augment</h1>
        <h3>A blog about software development</h3>
      </div>
      <section className="container">
        <BlogSidebar />
      </section>
    </main>
  );
};

const BlogHome = () => {
  return (
    <>
      <BlogContent />
    </>
  );
};
export default BlogHome;
