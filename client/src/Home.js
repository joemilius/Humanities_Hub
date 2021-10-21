import React, {useState} from 'react'
import Form from 'react-bootstrap'

const Home = () => {
    const [movieQuery, setMovieQuery] = useState('')
    const [musicQuery, setMusicQuery] = useState('')
    const [bookQuery, setBookQuery] = useState('')
    const [movieResults, setMovieResults] = useState([])
    const [musicResults, setMusicResults] = useState([])
    const [bookResults, setBookResults] = useState([])

    function movieSearch(event){
        e.preventDefault()
        setQuery( e.target.value )
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ process.env.REACT_APP_TMDB_API_KEY }&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
    .then(resp => resp.json())
    .then(data => setMovieResults(data.results))
    }

    function musicSearch(event){
        event.preventDefault()
        setMusicQuery(event.target.value)

        fetch(`theaudiodb.com/api/v1/json/1/search.php?s=${event.target.value}`)
        .then(response => response.json)
        .then(data => console.log(data))
    }
    return (
        <div>
        <Form>
            <Form.Label>Movie Search</Form.Label>
            <Form.Control classname='inputbox' onChange={}></Form.Control>
        </Form>
        <Form>
            <Form.Label>Music Search</Form.Label>
            <Form.Control classname='inputbox' onChange={musicSearch}></Form.Control>
        </Form>
        <Form>
            <Form.Label>Book Search</Form.Label>
            <Form.Control classname='inputbox' onChange={}></Form.Control>
        </Form>
        </div>
    )
}

export default Home
