import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
      console.log(resp)
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
      <Routes>
        <Route path="/" exact element={<UserHome user={user} userGroups={userGroups} setUserGroups={setUserGroups} allPublicGroups={allPublicGroups} setAllPublicGroups={setAllPublicGroups}/>}/>
        <Route path="/group" exact element={<GroupHome currentGroup={currentGroup}/>}/>
        <Route path="/movie-list" exact element={<MovieList currentGroup={currentGroup}/>}/>
        <Route path="/music-list" exact element={<MusicList currentGroup={currentGroup}/>}/>
        <Route path="/book-list" exact element={<BookList currentGroup={currentGroup}/>}/>
        <Route path="/activity-list" exact element={<ActivityHome currentGroup={currentGroup}/>}/>
      </Routes>
      </>
      }
    </Router>

  );
}

export default App;
