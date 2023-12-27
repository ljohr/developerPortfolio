import { useEffect, useState } from "react";
import axios from "axios";
import BlogSidebar from "../components/BlogSidebar";
import "./BlogHome.css";

const BlogHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/api/blog-home");
        console.log(res.data.posts);
        setPosts(res.data.posts);
      } catch (error) {
        if (error.status === 404) {
          console.log(error);
        }
      }
    };
    getPosts();
  }, []);

  return (
    <main className="blog-home">
      <div className="blog-title">
        <h1>Augment</h1>
        <h3>A blog about software development</h3>
      </div>
      <section className="container">
        <BlogSidebar />
        {posts.map((post) => {
          return (
            <div key={post._id} className="single-post">
              <div className="post-desc">
                <h3>{post.title}</h3>
                <p>{post.subtitle}</p>
              </div>
              <img src={post.image} alt="" />
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default BlogHome;
