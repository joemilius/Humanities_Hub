import React from 'react'

const UserHome = ({user}) => {
    function 
    return (
        <div>
            <h2>{user.username}</h2>
            <h3>Profile</h3>
            <h4>Frist Name: {user.profile.first_name}</h4>
            <h4>Last Name: {user.profile.last_name}</h4>
            <h4>Email: {user.profile.email}</h4>

            {}
        </div>
    )
}

export default UserHome
