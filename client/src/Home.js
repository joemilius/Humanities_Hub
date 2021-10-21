import React, {useState} from 'react'
import Form from 'react-bootstrap'

const Home = () => {
    const [movieQuery, setMovieQuery] = useState('')
    const [musicQuery, setMusicQuery] = useState('')
    const [bookQuery, setBookQuery] = useState('')
    
    return (
        <div>
        <Form>
            <Form.Label>Movie Search</Form.Label>
            <Form.Control classname='inputbox' onChange={}></Form.Control>
        </Form>
        <Form>
            <Form.Label>Music Search</Form.Label>
            <Form.Control classname='inputbox' onChange={}></Form.Control>
        </Form>
        <Form>
            <Form.Label>Book Search</Form.Label>
            <Form.Control classname='inputbox' onChange={}></Form.Control>
        </Form>
        </div>
    )
}

export default Home
