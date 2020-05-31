// import posts from './Posts.json';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function BlogPosts() {
  const [posts, setPosts] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const blogPosts = async () => {
      // e.preventDefault();
      await axios.get('http://127.0.0.1:8000/api/posts')
        .then(response => {
          console.log(response);
          setPosts(response.data.data);
        })
        .catch(error => {
          console.log(error)
        });
      }
      blogPosts();
    }, []);


  return (
    <div>
    <h1>Blog Posts:</h1>
      {blogPosts}
    </div>
  )
}

    // console.log(Posts.title)

    // const blogPosts = posts.map((item, index) => {
    //     return (
    //       // console.log(item.title)
    //       <div>
    //        <h1>{item.title}</h1>  
    //       <p>{item.paragraphs}</p>
    //        </div>
    //     )
    //   })



    //   return (
    //     <div> 
    //      {blogPosts}
    //     </div>
  




