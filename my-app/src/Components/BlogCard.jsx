import { Link } from "react-router-dom";


function BlogCard({ post }) {
  return (
    <div className="card">

      <h2>{post.title}</h2>

      <p>
        {post.body}
      </p>

      <div>
        {post.tags.map((tag) => (
          <span
            className="tag"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <br />

      <Link to={`/blog/${post.id}`}>
        Read More
      </Link>

    </div>
  );
}

export default BlogCard;