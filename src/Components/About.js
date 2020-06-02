import React from "react";


export default function About() {




  return (
    <>
      <div className="jumbotron  text-center" id="jumbotron" >

        <h1 className="display-3 text-center">Kate Sivy</h1>

        {/* <h1 className="lead ">Full Stack Web Developer</h1>  */}
        <div className="col-md-12">
          <img src="./Images/profile1.jpeg" id="profilePic" className="img-thumbnail rounded-circle" alt="..."></img>
        </div>
        <hr className="my-4"></hr>
        <h1 className="lead display-4">Full Stack Web Developer</h1>
        {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>  */}
        {/* <a className="btn btn-primary btn-lg" href="#" role="button">Contact</a>  */}
      </div>

      {/* <div  className="card mb-3 p-3"> */}
      <div className="row no-gutters">
        {/* <div  className="col-md-4">
    <img src="./Images/profile1.jpeg" id="profilePic" className="img-thumbnail rounded-circle" alt="..."></img>
    </div> */}
        <div className="col-md-6 offset-3">
          <div className="card-body text-center">
            {/* <h3  className="card-title text-center">Proficient In</h3> */}
            {/* <h5 className="text-inline">JavaScript * React * Laravel * PHP *MySQL * HTML</h5> */}
            <ul className="list-inline"> 
              <li className="list-inline-item"><h5>JavaScript *</h5></li>
              <li className="list-inline-item"><h5>React *</h5></li>
              <li className="list-inline-item"><h5>Laravel *</h5></li>
              <li className="list-inline-item"><h5>PHP *</h5></li>
              <li className="list-inline-item"><h5>MySQL *</h5></li>
              <li className="list-inline-item"><h5>HTML</h5></li>
            </ul>

          </div>
        </div>
        {/* </div>
 </div> */}
        {/* <div className="row"> */}
        <div className="col-6 offset-3 text-center">
          <div className="card-body">
          <ul className="list-inline"> 
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/kate-sivy-7104791a2/" className="card-link"><h5>Linkedin  </h5></a></li>
            <li className="list-inline-item"> 
            <a href="https://github.com/katesivy" className="card-link"><h5>GitHub  </h5></a></li>
            <li className="list-inline-item">
            <a href="https://docs.google.com/document/d/1DdmmnfULxxHjBfoEPDagHIf0a2QfUDXjPGpRj8fno1A/edit#heading=h.n64fgzu3lwuyy" className="card-link"><h5>Resume</h5></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card ">
        <h5 className="card-header" id="jumbotron"></h5>
        <div className="card-body p-5 m-2">
          <h5 className="card-title">My story</h5>
          <p className="card-text">I have been a stay-at-home mom for the past 10 years and a musician my whole life. Since I earned a masters degree in piano performance in 2003, I’ve been teaching piano lessons, accompanying other musicians, and providing piano accompaniment for ballet classes at UK, the Bluegrass Youth Ballet, and KY’s Governor’s School for the Arts. I had been looking for a career change and realized this past year that web development uses many of the same skill sets I’ve developed through years of studying music and raising children. I’ve been surprised how many times while learning to program that I’ve thought, “This is just like how I would go about learning a piece of music.” I love applying the same attention to detail, creativity, and problem-solving skills used in music to making things work well with technology.
</p>

        </div>
      </div>
      <div className="col-6 offset-3 p-3 text-center">
        {/* <a href=""> */}
          <h5>katesivy@gmail.com</h5>
        {/* </a> */}
      </div>
    </>
  )
}
