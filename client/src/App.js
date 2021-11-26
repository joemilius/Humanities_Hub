import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import LoginPage from './Users/LoginPage'
import UserHome from './Users/UserHome'
import GroupHome from './GroupHome'
import MovieList from './MovieList/MovieList'
import BookList from './BookList/BookList'
import MusicList from './MusicList/MusicList'
import ActivityHome from './Activities/ActivityHome'
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  const [currentGroup, setCurrentGroup] = useState([])
  const [allPublicGroups, setAllPublicGroups] = useState([])
  const [errors, setErrors] = useState([])
  const [movieList, setMovieList] = useState([])
  const [musicList, setMusicList] = useState([])
  const [bookList, setBookList] = useState([])
  const [showSignUp, setShowSignUp] = useState(false)

  console.log(user)

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
        });
      }
    })
  }, []);

  function handleLogout() {
    fetch("/logout", { 
      method: "DELETE"})
      .then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }

  return (
    <Router>
      <NavBar user={user} showSignUp={showSignUp} setShowSignUp={setShowSignUp} setCurrentGroup={setCurrentGroup} handleLogOut={handleLogout}/>
      {!user ?
      <LoginPage showSignUp={showSignUp} setShowSignUp={setShowSignUp} setUser={setUser} errors={errors} setErrors={setErrors}/>
      :
      <>
      <Switch>
        <Route path="/" exact component={() => <UserHome user={user} allPublicGroups={allPublicGroups} setAllPublicGroups={setAllPublicGroups}/>}/>
      </Switch>
      <Switch>
        <Route path="/group" exact component={() => <GroupHome/>}/>
      </Switch>
      <Switch>
        <Route path="/movie-list" exact component={() => <MovieList/>}/>
      </Switch>
      <Switch>
        <Route path="/music-list" exact component={() => <MusicList/>}/>
      </Switch>
      <Switch>
        <Route path="/book-list" exact component={() => <BookList/>}/>
      </Switch>
      <Switch>
        <Route path="/activity-list" exact component={() => <ActivityHome/>}/>
      </Switch>
      </>
      }
    </Router>

  );
}

export default App;
