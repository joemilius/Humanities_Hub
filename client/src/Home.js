import React, {useState} from 'react'
import Form from 'react-bootstrap'

const Home = () => {
    const [movieQuery, setMovieQuery] = useState('')
    const [musicQuery, setMusicQuery] = useState('')
    const [bookQuery, setBookQuery] = useState('')
    const [movieResults, setMovieResults] = useState([])
    const [musicResults, setMusicResults] = useState([])
    const [bookResults, setBookResults] = useState([])


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
