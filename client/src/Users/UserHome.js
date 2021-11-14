import React, {useState} from 'react'
import Button from 'react-bootstrap'

const UserHome = ({user, groups, setGroups}) => {
    const [allUsers, setAllUsers] = useState([])
    
    function groupList(){
        fetch(`/groups`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setGroups(data)
        })
    }

    function userList(){
        fetch(`http://localhost:3000/users`)
        .then(response => response.json())
        .then(data => setAllUsers(data))
    }
    return (
        <div>
            <h2>{user.username}</h2>
            <h3>Profile</h3>
            <h4>First Name: {user.first_name}</h4>
            <h4>Last Name: {user.last_name}</h4>
            <h4>Email: {user.email}</h4>

            <div>
                <Button onClick={userList}> Get Users</Button>
            {allUsers.map(user => {
                return (
                    <div>
                        <Button>{user.username}</Button>
                    </div>
                )
            })}
            </div>

            {groups ?
            groups.map(group => {                return (
                    <button>{group.group_name}</button>
                )}): null}
        </div>
    )
}

export default UserHome
