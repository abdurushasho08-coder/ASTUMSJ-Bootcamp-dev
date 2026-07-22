import { useNavigate } from "react-router-dom";
import BlogForm from "../Components/BlogForm";

function CreatePost() {
  const navigate = useNavigate();

  function addPost(title, body) {
    const savedPosts = JSON.parse(localStorage.getItem("Post")) || [];

    const newPost = {
      id: Date.now(),
      title: title,
      body: body,
      tags: [" Post"]
    };

    savedPosts.unshift(newPost);

    localStorage.setItem("Posts", JSON.stringify(savedPosts));

    navigate("/");
  }

  return (
    <div className="container">
      <h1>Create New Post</h1>

      <BlogForm onSubmit={addPost} />
    </div>
  );
}

export default CreatePost;