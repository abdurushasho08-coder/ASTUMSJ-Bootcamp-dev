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

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows="6"
        placeholder="Write your blog..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit">
        Add Post
      </button>

    </form>
  );
}

export default BlogForm;