import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'

const UserHome = ({user, allPublicGroups, setAllPublicGroups}) => {
    const [allUsers, setAllUsers] = useState([])
    const [createGroup, setCreateGroup] = useState({
        group_name: ''
    })
    
    function getPublicGroups(){
        fetch(`/groups`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setAllPublicGroups(data)
        })
    }

    function userList(){
        fetch(`http://localhost:3000/users`)
        .then(response => response.json())
        .then(data => setAllUsers(data))
    }

    function handleCreateGroup(){
        
    }

    function createGroup(){
        fetch(`http://localhost:3000/groups`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(createGroup)
        })

    }
    return (
        <div>
            <h2>{user.username}</h2>
            <h3>Profile</h3>
            <h4>First Name: {user.first_name}</h4>
            <h4>Last Name: {user.last_name}</h4>
            <h4>Email: {user.email}</h4>

            <div>
                <Button onClick={userList}>Get Users</Button>
            {allUsers.map(user => {
                return (
                    <div>
                        <Button>{user.username}</Button>
                    </div>
                )
            })}
            </div>
            <div>
                <Button onClick={getPublicGroups}>Get Groups</Button>
                {allPublicGroups.map(group => {
                return (
                    <div>
                        <Button>{group.group_name}</Button>
                    </div>
                )
            })}
            </div>
            <div>
                <Form>
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control classname='inputbox' name='groupname' value={handleCreateGroup} ></Form.Control>
                    <Button onClick={}>Create Group</Button>
                </Form>
            </div>

            {groups ?
            groups.map(group => {                return (
                    <button>{group.group_name}</button>
                )}): null}
        </div>
    )
}

export default UserHome
