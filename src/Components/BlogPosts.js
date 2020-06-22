import React from "react";
import posts from './Posts.json';


export default function BlogPosts() {

 
  function splitPosts(post) {
    return post.map((item, index) => {
      if (index % 2 === 0) {
        return <h5 key={index}>{item}</h5>
      } else {
        return <p key={index}>{item}</p>
      }
    })
  }


  const blogPost = posts.map((item, index) => {

    return (
      <>
      <div id={/BlogPosts/ + item.title} key={index} className="card-header m-1"  id="about">
     
        <h1 id={/BlogPosts/ + item.title}> {item.title} </h1>
        <p id={item.location} className="ml-4"> {item.location} </p>
     
      </div>
      <div key={index} className="card-body p-5">
        {/* <h5 className="card-title mb-5">
        </h5> */}
        <p className="card-text">
          {splitPosts(item.paragraphs)}
        </p>
      </div>
    </>
      )
  });
  return (
    <div className=" ">
      {blogPost}
    </div>
  )

}
