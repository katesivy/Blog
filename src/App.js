import React from 'react';
import Home from './Components/Home';
import BlogPosts from './Components/BlogPosts';
import About from './Components/About';
// import Navbar from './Components/Navbar';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>


        <Switch>
          <Route path="/about">
            <NavBar />
            <About />
          </Route>
          <Route path="/blogposts">
            <NavBar />
            <BlogPosts />
          </Route>
          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



