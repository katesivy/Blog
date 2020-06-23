import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import BlogPosts from './Components/BlogPosts';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

export default function App() {

  const [url, setUrl] = useState('');

  return (
    <Router>
      <div>


        <Switch>
          <Route path="/about">
            <NavBar />
            <About />
          </Route>
          <Route path="/blogposts">
            <NavBar  />
            <BlogPosts />
          </Route>
          <Route path="/portfolio">
            <NavBar  />
            <Portfolio />
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



