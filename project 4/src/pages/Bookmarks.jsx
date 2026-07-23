import { useAtomValue } from "jotai";
import { bookmarksAtom } from "../atom/bookmarkAtom";
import BlogCard from "../Components/BlogCard";

function Bookmarks() {
  const bookmarks = useAtomValue(bookmarksAtom);

  return (
    <div className="container">
      <h1>Bookmarks</h1>

      <div className="bookmark-container">
        {bookmarks.length === 0 ? (
          <h3 className="header">No bookmarks yet</h3>
        ) : (
          bookmarks.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}

export default Bookmarks;