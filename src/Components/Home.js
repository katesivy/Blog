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
                            <img src="https://images.unsplash.com/photo-1548192893-c91fcf337352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
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
