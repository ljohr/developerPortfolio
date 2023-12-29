import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Mdx from "@/app/components/Mdx";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BlogSidebar from "@/app/components/BlogSidebar";
import styles from "./BlogPost.module.css";

interface PageProps {
  params: {
    slug: string;
  };
}

const getDocFromParams = async (slug: string) => {
  const article = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!article) {
    notFound();
  }

  return article;
};

const page = async ({ params }: PageProps) => {
  const article = await getDocFromParams(params.slug);

  return (
    <>
      <Navbar />
      <div className={`container ${styles.blogContainer}`}>
        <BlogSidebar />
        <article className={styles.blogPost}>
          <h1>{article.title}</h1>
          <Mdx code={article.body.code} />
        </article>
      </div>
      <Footer />
    </>
  );
};

export default page;
