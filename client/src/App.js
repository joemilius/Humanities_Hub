import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './NavBar'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact/>
      </Switch>
      <Switch>
        <Route path="movie-list" exact component={}/>
      </Switch>
      <Switch>
        <Route path="music-list" exact component={}/>
      </Switch>
      <Switch>
        <Route path="book-list" exact component={}/>
      </Switch>
      <Switch>
        <Route path="activity-list" exact component={}/>
      </Switch>
    </Router>
  );
}

export default App;
