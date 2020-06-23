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
            <div className="row mb-2 flex-sm-fill  sticky-top p-3" id="navbar">
             
                <div className="col-lg-12">
                    <nav className="navbar  flex-sm-fill flex-md-fill flex-lg-fill navbar-expand-lg navbar-light " id="navbar">

                        <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/'}>Home</Link>

                        <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/about'}>About</Link>

                        <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/BlogPosts'}>Blog Posts</Link>

                        <Link className="a:hover text-justify-center " id="link" onClick={() => setUrl(url)} to={'/portfolio'}>Portfolio</Link>

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
                                                <li>
                                                <a href={/BlogPosts/ + item.title}>
                                                   {item.title},  {item.location}</a>
                                                   </li>
                                                
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




