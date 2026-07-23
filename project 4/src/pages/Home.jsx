import {useState,useEffect} from 'react';
import BlogCard from '../Components/BlogCard';
import {  Link } from "react-router-dom";

function Home() {
  const [loading, setloading]=useState(false);
  const [error,seterror]=useState(null);
  const[posts,setposts]=useState ([])
  useEffect(() =>{
    
     const savedPosts = JSON.parse(localStorage.getItem("Posts")) || [];

    const fechpost=async ()=>{
      setloading(true);
      
      try{
      const response=await fetch("https://dummyjson.com/posts?limit=10");
      const data=(await response.json()) ;
      setposts([...savedPosts,...data.posts])
      }catch(error){
        seterror(error);
      }finally{
        setloading(false); 
      }
      
    };
    fechpost();
  },[]);
  if (loading){
    return <div>loading....</div>
  }
  if(error){
    return <div>something is wrong</div>
  }
  return(
    <div>
      {posts.map((post)=>(<BlogCard key={post.id} post={post}/>))}
    <div className='button'>
      <button>
          <Link to="/create">Create New Blog</Link>
      </button>
    </div>
    </div>
  );

}
export default Home;
