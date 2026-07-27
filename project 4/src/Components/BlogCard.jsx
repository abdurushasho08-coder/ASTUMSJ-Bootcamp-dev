import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div className="card">
        <div>
        {post.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      <br />
      <div>
        <Link to={`/blog/${post.id}`}>
          <button> Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
