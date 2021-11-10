import React, {useState} from 'react'
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
  const [user, setUser] = useState([])
  const [errors, setErrors] = useState([])
  const [movieList, setMovieList] = useState([])
  const [musicList, setMusicList] = useState([])
  const [bookList, setBookList] = useState([])
  const [showSignup, setShowSignUp] = useState(false)

  useEffect(() => {
    fetch("/me")
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
      <NavBar user={user} showSignUp={showSignUp} setShowSignUp={setShowSignUp} handleLogOut={handleLogout}/>
      {!user ?
      <LoginPage showSignUp={showSignUp} setShowSignUp={setShowSignUp} setUser={setUser} setErrors={setErrors}/>
      :
      <>
      <Switch>
        <Route path="/" exact component={() => <UserHome/>}/>
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
