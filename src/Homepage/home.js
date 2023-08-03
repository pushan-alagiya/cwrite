import "../Homepage/home.css";
import Bloglist from "../Blogs/bloglist";
import { useState, useEffect } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const deleteblog = (id) => {
    const newblogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newblogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blog")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setBlogs(response);
      });
  }, []);

  return (
    <div className="home">
      {blogs && (
        <Bloglist
          blogs={blogs}
          title="All Blogs"
          deleteblog={deleteblog}
        ></Bloglist>
      )}
      <br />
      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "abc")}
        title="abc's Blogs"
      ></Bloglist> */}
    </div>
  );
};

export default Home;
