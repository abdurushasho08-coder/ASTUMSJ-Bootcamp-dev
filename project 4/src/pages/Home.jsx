import { useState, useEffect } from "react";
import BlogCard from "../Components/BlogCard";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const fechpost = async () => {
      setloading(true);
      const savedPosts = JSON.parse(localStorage.getItem("Posts")) || [];

      try {
        const response = await fetch("https://dummyjson.com/posts?limit=10");
        const data = await response.json();
        setposts([...savedPosts, ...data.posts]);
      } catch (error) {
        seterror(error);
      } finally {
        setloading(false);
      }
    };
    fechpost();
  }, []);
  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>something is wrong</div>;
  }
  return (
    <>
      <div className="blog">
        <div className="blog-header">latest stories</div>
        <div className="home-button">
          <Link className="button" to="/create">
            Create New post
          </Link>
        </div>
      </div>

      <div className="home-gird">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <footer className="footer">
        <div className="footerr">BLOG APP</div>
        <div className="foot">
          <p>Privacy policy</p>
          <p>Terms of service</p>
          <p>Contact</p>
        </div>
      </footer>
    </>
  );
}
export default Home;
