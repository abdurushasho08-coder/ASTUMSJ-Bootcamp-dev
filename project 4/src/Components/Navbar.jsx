import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <div className="b">BLOG APP</div>
      <div className="navbar">
        <Link to="/">Home</Link>

        <Link to="/create">Create Post</Link>

        <Link to="/bookmarks">Bookmarks</Link>
      </div>
    </div>
  );
}

export default Navbar;
