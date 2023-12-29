import { allDocs } from "contentlayer/generated";
import { playfair } from "../utils/fonts";
import { formatDate } from "../utils/formatDate";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogSidebar from "../components/BlogSidebar";

import styles from "./BlogHome.module.css";

const BlogContent = () => {
  return (
    <main className={styles.blogHome}>
      <div className={`${playfair.className} ${styles.blogTitle}`}>
        <h1>Augment</h1>
        <h4>A blog about software development</h4>
      </div>
      <section className={`container ${styles.blogContainer}`}>
        <BlogSidebar />
        <div>
          {allDocs.map((post) => (
            <div key={post._id} className={styles.blogPost}>
              <Link href={post.slug}>
                <h2>{post.title}</h2>
              </Link>
              <p className={playfair.className}>{post.description}</p>
              <p className={styles.postDate}>{formatDate(post.date)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

const BlogHome = () => {
  return (
    <>
      <Navbar />
      <BlogContent />
      <Footer />
    </>
  );
};
export default BlogHome;
