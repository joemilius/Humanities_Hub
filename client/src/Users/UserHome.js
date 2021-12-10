import React, {useState} from 'react'
import {Button, Form, DropdownButton, Dropdown} from 'react-bootstrap'

const UserHome = ({user, userGroups, setUserGroups, allPublicGroups, setAllPublicGroups}) => {
    const [allUsers, setAllUsers] = useState([])
    const [showGroupForm, setShowCreateGroupForm] = useState(false)
    const [newGroup, setNewGroup] = useState({
        group_name: '',
        public: '',
        memberships_attributes: {
            user_id: user.id,
            admin: true
        }
    })
    console.log(newGroup)
    
    function getPublicGroups(){
        fetch(`http://localhost:3000/groups`)
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

    function handleCreateGroup(event){
        setNewGroup({...newGroup,
            [event.target.name] : event.target.value
        })
    }

    function handleGroupPublic(event){
        console.log(event.target.value)
        setNewGroup({...newGroup,
            [event.target.name] : event.target.value
        })
    }

    function submitCreateGroup(){
        fetch(`http://localhost:3000/groups`, {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(newGroup)
        })
        .then(response => response.json())
        .then(data => {
            setUserGroups(...userGroups, data)
            console.log(userGroups)
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
                {/* {allPublicGroups.map(group => {
                return (
                    <div>
                        <Button>{group.group_name}</Button>
                    </div>
                )
            })} */}
            </div>
            <div>
                <Form onSubmit={submitCreateGroup}>
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control classname='inputbox' name='group_name' value={newGroup.group_name} onChange={handleCreateGroup}></Form.Control>
                    <div key={`inline-radio`} className="mb-3" >
                    <Form.Check
                        inline
                        label="Public"
                        value={true}
                        name='public'
                        type="radio"
                        id={`inline-checkbox-1`}
                        onChange={handleCreateGroup}
                    />
                    <Form.Check
                        inline
                        label="Private"
                        value={false}
                        name='public'
                        type="radio"
                        id={`inline-checkbox-2`}
                        onChange={handleCreateGroup}
                    />
                    </div>
                    <Button type='submit'>Create Group</Button>
                </Form>
            </div>
            <div>
                {/* {user.invitations.map(invitation => {
                    return (
                        <>
                            <p>{invitation.group.group_name}</p>
                        </>
                    )
                })} */}
            </div>
            <div>
                {/* {user.memberships.map(membership => {
                    return (
                        <>
                            <p>{membership.group.group_name}</p>
                        </>
                    )
                })} */}
            </div>
        </div>
    )
}

export default UserHome
