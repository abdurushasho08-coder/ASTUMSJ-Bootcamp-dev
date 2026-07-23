import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atom/bookmarkAtom";

function BlogDetail() {
  const { id } = useParams();

  const [mypost, setmyPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  useEffect(() => {
    Promise.all([
      fetch(`https://dummyjson.com/posts/${id}`),
      fetch(`https://dummyjson.com/comments/post/${id}`),
    ]).then(async ([mypostRes, commentsRes]) => {
      if (!mypostRes.ok || !commentsRes.ok) throw new Error();
      const mypostData = await mypostRes.json();
      const commentsData = await commentsRes.json();
      setmyPost(mypostData);
      setComments(commentsData.comments);

      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div> Loading... </div>
    );
  }
  function handleBookmark() {
    const found = bookmarks.find((item) => item.id === mypost.id);
    if (found) {
      const updated = bookmarks.filter((item) => item.id !== mypost.id);
      setBookmarks(updated);
    } else {
      setBookmarks([...bookmarks, mypost]);
    }
  }

  return (
    <div className="container">
      <h1>{mypost.title}</h1>

      <p>{mypost.body}</p>

      <div>
        {mypost.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    <div className="button-link">
        <button className="btn">
          <Link to="/"> back to home </Link>
        </button>

        <button onClick={handleBookmark} className="bookmark">
          Bookmark
        </button>
    </div>

      <h2>Comments</h2>

      {comments.length === 0 ? (
        <p>No comments found.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="card">
            <h4>{comment.user.username}</h4>
            <p>{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogDetail;
