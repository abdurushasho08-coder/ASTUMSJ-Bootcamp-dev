import {useState,useEffect} from 'react';
import BlogCard from '../Components/BlogCard';

function Home() {
  const [loading, setloading]=useState(false);
  const [error,seterror]=useState(null);
  const[posts,setposts]=useState ([])
  useEffect(() =>{
    const fechpost=async ()=>{
      setloading(true);
      try{
      const response=await fetch("https://dummyjson.com/posts?limit=10");
      const posts=(await response.json()) ;
      setposts(posts)
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
      <button>
        <link to="/create"> Create New Blog</link>
      </button>
    </div>
  );

}
export default Home;
