// import React from 'react';

// <NavLink to="/react" activeClassName="hurray">
//   React
// </NavLink>


// class Navbar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.navbarLinks =
//             ["Home",
//                 "Blog",
//                 "About"]
//     }

//     render() {

//         const navLinks = this.navbarLinks.map((link, index) => {
//             return (
//                 <ul class="navbar-nav mr-auto">
//                     <li class="nav-item active">
//                         <a className="nav-link"
//                             onclick={() => this.clickHandler}
//                             href="#"
//                             key={index}
//                         >
//                             <h4 className="d-inline p-2 content-justify-center">{link}</h4>
//                         </a>
//                     </li>
//                 </ul>
//             )
//         });
//         return (
//             <>
//             <div className="row bg-light">
//                 <nav className="navbar navbar-expand-lg navbar-light ">
//                     {/* <a className="navbar-brand" href="#">Navbar</a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button> */}
//                                 {navLinks}
//                 </nav>
//                 </div>

//             </>
//         )
//     }
// }

// export default Navbar;
// {/* 
// <div className="d-inline-flex">
//             <nav className="  navbar navbar-expand-lg navbar-light bg-light sticky-top">
//             <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//                 <h2>{navLinks}</h2>
//                 </li>
//             </ul>
//             </nav>
//             </div> */}