import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <div className="jumbotron jumbotron-fluid">
                    <div className="row">
                        <div className="col-12 bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2017/09/05/06/40/piano-2716597__480.jpg"
                                className="img-fluid mx-auto d-block"></img>
                            <div className="card-img-overlay">
                                <h1 className="display-4 text-white pt-3 ml-5">Kate's Blog</h1>
                                <p className="lead text-white ml-5">the journey of a stay-at-home-mom/ballet accompanist/<br></br>
                    piano teacher learning to become a web developer</p>
                            </div>
                        </div>
                    </div>
                    </div>
  </>
        )
    }
}

export default Home;

/*<nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="navbar-nav mr-auto">
        <div className="nav-item active">
            <a className="nav-link"
                onclick={() => this.clickHandler}
                href="#"
                key={index}
            >
                {link}
            </a>
        </div>
    </div>
</div>
</>

)
});
return (
<h2>
{navLinks}
</h2>
)
}
}*/