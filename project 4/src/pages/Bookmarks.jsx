import { useAtom } from "jotai";
import { bookmarksAtom } from "../atom/bookmarkAtom";
import BlogCard from "../Components/BlogCard";

function Bookmarks() {
  const [bookmarks] = useAtom(bookmarksAtom);

  return (
    <div className="container">
      <h1>Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <h3>No bookmarks yet</h3>
      ) : (
        bookmarks.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))
      )}
    </div>
  );
}

export default Bookmarks;