import React from 'react'

const UserHome = ({user, groups, setGroups}) => {
    console.log(user)
    function showGroups(){
        fetch(`/groups`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setGroups(data)
        })
    }
    return (
        <div>
            <h2>{user.username}</h2>
            <h3>Profile</h3>
            <h4>First Name: {user.first_name}</h4>
            <h4>Last Name: {user.last_name}</h4>
            <h4>Email: {user.email}</h4>

            {groups ?
            groups.map(group => {                return (
                    <button>{group.group_name}</button>
                )}): null}
        </div>
    )
}

export default UserHome
