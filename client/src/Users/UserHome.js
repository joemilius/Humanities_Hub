import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'

const UserHome = ({user, allPublicGroups, setAllPublicGroups}) => {
    const [allUsers, setAllUsers] = useState([])
    const [newGroup, setNewGroup] = useState({
        group_name: '',
        public: '',
        membership_attributes: {
            user_id: user.id,
            admin: true
        }
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

    function handleCreateGroup(event){
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
        .then(data => setMyGroups(data))

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
                    <DropdownButton id="dropdown-basic-button" title="Is It Public?" onChange={handleCreateGroup}>
                        <Dropdown.Item value={true}>Public</Dropdown.Item>
                        <Dropdown.Item value={false}>Private</Dropdown.Item>
                    </DropdownButton>
                    <Button>Create Group</Button>
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
