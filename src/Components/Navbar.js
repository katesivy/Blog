import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";


function Navbar(props) {
    // console.log(props);
    const history = useHistory();
    const [url, setUrl] = useState(history.location.pathname.split('/recipes')[1]);
    const [loggedIn, setLoggedIn] = useState('');





    return (
        <>
            {/* <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top bg bg-white">
                   
                </nav>
            </div> */}

            <div className="row mb-2 flex-sm-fill  sticky-top bg bg-white p-3 ">
                {/* <div className="col-lg-12 ml-5  text-justify-right bg bg-white">
                 
                </div> */}
                <div className="col-lg-12">
                    <nav className="navbar  flex-sm-fill flex-md-fill flex-lg-fill navbar-expand-lg navbar-light " id="navbar">

                        <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/'}>Home</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                         {/* <ul className="navbar-nav flex-sm-fill"> 
                            <li className="nav-item flex-sm-fill">  */}
                                <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/about'}>About</Link>
                             {/* </li>
                        </ul>  */}
                        <ul className="navbar-nav flex-sm-fill">
                            <li className="nav-item flex-sm-fill">
                                <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/BlogPosts'}>Blog Posts</Link>
                            </li>
                        </ul>

                    </nav>
                </div>

            </div>

        </>

    )
}
export default Navbar;




