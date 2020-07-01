import React from "react";



export default function BlogPosts() {


    return (
        <>
            <div className="jumbotron jumbotron-fluid text-center">
                <div className="container">
                    <h1 className="display-4">Portfolio</h1>
                    {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                </div>
            </div>

            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body text-center">
                    <h2 className="card-title">What's Cookin'?</h2>
                    <p className="card-text col-6 offset-3">A full-stack application on Google Cloud with a Laravel backend and React frontend allowing users to create and manage their own recipes and view recipes from the database. </p>
                    <a href="https://recipe-final-project.web.app/"  target="_blank" className="col-3 text-center btn btn-secondary">Final Project</a>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body text-center">
                    <h2 className="card-title">Kate's Kitchen</h2>
                    <p className="card-text">A sleek design of the most disgusting menu ever.</p>
                    <a href="https://katesivy.github.io/Restaurant"  target="_blank" className="col-3 text-center btn btn-secondary">React Restaurant</a>
                </div>
            </div>

            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body text-center">
                    <h2 className="card-title">Weather App</h2>
                    <p className="card-text">Checks your local weather, using React and API's</p>
                    <a href="https://ks-weather-app.web.app"  target="_blank" className="col-3 text-center btn btn-secondary">Weather App</a>
                </div>
            </div>

            <div className="card text-center">
                <div className="card-header">
                </div>
                <div className="card-body text-center">
                    <h2 className="card-title">Puzzle Slider</h2>
                    <p className="card-text">Click the tiles around the blank tile to see it move. Uses JavaScript and React.</p>
                    <a href="https://puzzle-slider-734c5.web.app"  target="_blank" className="col-3 text-center btn btn-secondary">Puzzle Slider</a>
                </div>
            </div>



        </>
    )
}
