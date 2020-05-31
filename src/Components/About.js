import React from "react";


export default function About() {




  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Welcome to my site!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        {/* <hr className="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Contact</a> */}
      </div>

      <div  className="card mb-3" >
  <div  className="row no-gutters">
    <div  className="col-md-4">
    <img src="./Images/profile1.jpeg" id="profilePic" className="img-thumbnail height: 20px mh-15" alt="..."></img>
    </div>
    <div  className="col-md-8">
      <div  className="card-body">
        <h3  className="card-title">Full Stack Web Developer</h3>
        <ul className="">
          <h5>Proficient In:</h5>
          <li className="">HTML</li>
          <li className="">JavaScript</li>
          <li className="">React</li>
          <li className="">Laravel</li>
        </ul>
       
      </div>
    </div>
  </div>
</div>
     
       
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      {/* </div> */}
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">My story</h5>
          <p className="card-text">I have been a stay-at-home mom for the past 10 years and a musician my whole life. Since I earned a masters degree in piano performance in 2003, I’ve been teaching piano lessons, accompanying other musicians, and providing piano accompaniment for ballet classes at UK, the Bluegrass Youth Ballet, and KY’s Governor’s School for the Arts. I had been looking for a career change and realized this past year that web development uses many of the same skill sets I’ve developed through years of studying music and raising children. I’ve been surprised how many times while learning the to program that I’ve thought “this is just like how I would go about learning a piece of music.” I love applying the same attention to detail, creativity, and problem-solving skills used in music to making things work well with technology.
</p>

          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}
