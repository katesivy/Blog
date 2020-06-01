import React, { useState, useEffect } from 'react';
import posts from './Posts.json';
import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";


function Navbar(props) {
    // console.log(props);
    const [url, setUrl] = useState('');

    const blogWeek = posts.map((item, index) => {
        return (
            <li>item.title</li>
        )
    });

    return (
        <>
            {/* <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top bg bg-white">
                   
                </nav>
            </div> */}

            <div className="row mb-2 flex-sm-fill  sticky-top p-3" id="navbar">
                {/* <div className="col-lg-12 ml-5  text-justify-right bg bg-white">
                 
                </div> */}
                <div className="col-lg-12">
                    <nav className="navbar  flex-sm-fill flex-md-fill flex-lg-fill navbar-expand-lg navbar-light " id="navbar">
                        <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/'}>Home</Link>



                        {/* <ul className="navbar-nav flex-sm-fill"> 
                            <li className="nav-item flex-sm-fill">  */}
                        <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/about'}>About</Link>
                        {/* </li>
                        </ul>  */}
                        <ul className="navbar-nav flex-sm-fill">
                            <li className="nav-item flex-sm-fill">
                                <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/BlogPosts'}>Blog Posts</Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">{blogWeek}</span>
                                </button>
                            </li>
                        </ul>

                        {/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav  flex-sm-fill">
                                <li className="nav-item dropdown flex-sm-fill">

                                    <a className="nav-link dropdown-toggle" id="link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Blog Posts
                                     </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink text-center" id="link">
                                    <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/BlogPosts'}>
                                                    <li>See All</li>
                                                    </Link>
                                        {posts.map((item, index) => {
                                            return (
                                                <a href={/BlogPosts/ + item.title}>
                                                    <li>{item.title}</li>
                                                </a>
                                            )
                                        })
                                        }

                                    </div>
                                </li>
                            </ul>
                        </div> */}

                    </nav>
                </div>

            </div>

        </>

    )
}
export default Navbar;




