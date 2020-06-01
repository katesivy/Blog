import React from "react";
import posts from './Posts.json';


export default function BlogPosts() {


  console.log(posts)

  // console.log(Posts.title)

  // const blogTitle = posts.map((item, index) => {
  //   return (
  //     item.title
  //   )
  // })
  // const blogParagraphs = posts.map((item, index) => {
  //   return (
  //     item.paragraphs
  //   )
  // })
  function splitParas(post) {
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
      <div className="card-header">
        <h1> {item.title}</h1>
      </div>
      <div key={index} className="card-body">
        {/* <h5 className="card-title mb-5">
        </h5> */}
        <p className="card-text">
          {splitParas(item.paragraphs)}
        </p>
      </div>
    </>
      )
  });
  return (
    <div>
      {blogPost}
    </div>
  )

}
