import React from 'react';


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.navbarLinks =
               ["Home",
                "Blog",
                "About Me"]
    }

    render() {
        
        const navLinks = this.navbarLinks.map((link, index) => {
        return (
          
              <a className="nav-link"
                onclick={() => this.clickHandler}
                href="#"
                key={index}
            >
            {link}
            </a>
           
        )
        });
        return(
            <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="navbar-nav mr-auto">
      <div className="nav-item active">
        <a className="nav-link" href="#">{navLinks} <span className="sr-only">(current)</span></a>
      </div>
</div>
</div>
</nav>
            
           </>
        )
    }
}

export default Navbar;
{/* 
<div className="d-inline-flex">
            <nav className="  navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <h2>{navLinks}</h2>
                </li>
            </ul>
            </nav>
            </div> */}