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
  const [userGroups, setUserGroups] = useState([])
  const [allPublicGroups, setAllPublicGroups] = useState([])
  const [errors, setErrors] = useState([])
  const [movieList, setMovieList] = useState([])
  const [musicList, setMusicList] = useState([])
  const [bookList, setBookList] = useState([])
  const [showSignUp, setShowSignUp] = useState(false)

  console.log(user)
  console.log(userGroups)

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setUser(user)
          setUserGroups(user.groups)
        });
      }
    })
  }, []);

  function handleLogout() {
    fetch("http://localhost:3000/logout", { 
      method: "DELETE"})
      .then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    })
  }

  return (
    <Router>
      <NavBar user={user} showSignUp={showSignUp} setShowSignUp={setShowSignUp} setCurrentGroup={setCurrentGroup} handleLogout={handleLogout}/>
      {!user ?
      <LoginPage showSignUp={showSignUp} setShowSignUp={setShowSignUp} setUser={setUser} setUserGroups={setUserGroups} errors={errors} setErrors={setErrors}/>
      :
      <>
      <Switch>
        <Route path="/" exact component={() => <UserHome user={user} userGroups={userGroups} setUserGroups={setUserGroups} allPublicGroups={allPublicGroups} setAllPublicGroups={setAllPublicGroups}/>}/>
      </Switch>
      <Switch>
        <Route path="/group" exact component={() => <GroupHome currentGroup={currentGroup}/>}/>
      </Switch>
      <Switch>
        <Route path="/movie-list" exact component={() => <MovieList currentGroup={currentGroup}/>}/>
      </Switch>
      <Switch>
        <Route path="/music-list" exact component={() => <MusicList currentGroup={currentGroup}/>}/>
      </Switch>
      <Switch>
        <Route path="/book-list" exact component={() => <BookList currentGroup={currentGroup}/>}/>
      </Switch>
      <Switch>
        <Route path="/activity-list" exact component={() => <ActivityHome currentGroup={currentGroup}/>}/>
      </Switch>
      </>
      }
    </Router>

  );
}

export default App;
