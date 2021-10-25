import React, {useState} from 'react'
import {Form} from 'react-bootstrap'

const Home = () => {
    const [movieQuery, setMovieQuery] = useState('')
    const [musicQuery, setMusicQuery] = useState('')
    const [bookQuery, setBookQuery] = useState('')
    const [movieResults, setMovieResults] = useState([])
    const [musicResults, setMusicResults] = useState([])
    const [bookResults, setBookResults] = useState([])

    function movieSearch(event){
        event.preventDefault()
        setMovieQuery(event.target.value)
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${event.target.value}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        setMovieResults(data.results)})
    }

    function musicSearch(event){
        event.preventDefault()
        setMusicQuery(event.target.value)

        fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${event.target.value}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    function bookSearch(event){
        event.preventDefault()
        setBookQuery(event.target.value)

        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${event.target.value}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }
    return (
        <Form>
        <Form.Group>
            <Form.Label>Movie Search</Form.Label>
            <Form.Control className='inputbox' onChange={movieSearch}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Music Search</Form.Label>
            <Form.Control className='inputbox' onChange={musicSearch}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Book Search</Form.Label>
            <Form.Control className='inputbox' onChange={bookSearch}></Form.Control>
        </Form.Group>
        </Form>
    )
}

export default Home
