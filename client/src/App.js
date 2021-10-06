import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"/>
      </Switch>
      <Switch>
        <Route path="movie-list"/>
      </Switch>
      <Switch>
        <Route path="music-list"/>
      </Switch>
      <Switch>
        <Route path="book-list"/>
      </Switch>
      <Switch>
        <Route path="activity-list"/>
      </Switch>
    </Router>
  );
}

export default App;
