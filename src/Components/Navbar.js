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
           <>
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link"
            
                onclick={() => this.clickHandler}
                href="#"
                key={index}
            >
            {link}
            </a>
            </li>
            </ul>
            </>
        )
        });
        return(
            <h2 className="d-inline-flex">
                {navLinks}
            </h2>
        )
    }
}

export default Navbar;