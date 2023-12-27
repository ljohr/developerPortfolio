import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BlogPost.css";

const BlogPost = () => {
  const [postData, setPostData] = useState({});
  const { title } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/blog/${title}`);
        setPostData(res.data.post[0]);
        console.log(res.data.post);
      } catch (error) {
        if (error.status === 404) {
          console.log(error);
        }
      }
    };
    if (title) {
      fetchPost();
    }
  }, [title]);

  return (
    <main className="blog-post">
      <img className="post-main-img" src={postData.image} alt="" />
      <div className="container post-container">
        <h1 className="post-title">{postData.title}</h1>
        <h3 className="post-subtitle">{postData.subtitle}</h3>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
      </div>
    </main>
  );
};

export default BlogPost;
