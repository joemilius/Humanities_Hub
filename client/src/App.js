import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import MovieList from './MovieList/MovieList'
import BookList from './BookList/BookList'
import MusicList from './MusicList/MusicList'
import ActivityHome from './ActivityList/ActivityHome'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={<Home/>}/>
      </Switch>
      <Switch>
        <Route path="movie-list" exact component={<MovieList/>}/>
      </Switch>
      <Switch>
        <Route path="music-list" exact component={<MusicList/>}/>
      </Switch>
      <Switch>
        <Route path="book-list" exact component={<BookList/>}/>
      </Switch>
      <Switch>
        <Route path="activity-list" exact component={<ActivityHome/>}/>
      </Switch>
    </Router>
  );
}

export default App;
