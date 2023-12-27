import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      <div className="container">
        <h1>{postData.title}</h1>
      </div>
    </main>
  );
};

export default BlogPost;
