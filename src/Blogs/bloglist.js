import "../Blogs/bloglist.css";

const Bloglist = ({ blogs, title, deleteblog }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="bloglist">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2>
            <div className="blog-author">Written by: {blog.author}</div>
            <button
              id="deletebutton"
              onClick={() => {
                deleteblog(blog.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
