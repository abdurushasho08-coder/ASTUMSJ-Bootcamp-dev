import { useState } from "react";

function BlogForm({ onSubmit }) {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      alert("please fill out both content and titile")
      return;
    }
    onSubmit(title, body);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Title</label>
      <input
      className="title"
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
        <label>Content</label>
      <textarea
      className="textrea"
        rows="6"
        placeholder="Write your blog..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

          <button className="button-form" type="submit"> add post 
          </button>
    </form>
  );
}

export default BlogForm;