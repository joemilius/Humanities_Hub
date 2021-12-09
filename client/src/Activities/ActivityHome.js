import React from 'react'
import ActivityList from './ActivityList'
import ActivityForm from './ActivityForm'

const ActivityHome = (currentGroup) => {
    return (
        <div>
            <ActivityForm />
            <ActivityList currentGroup={currentGroup}/>
        </div>
    )
}

export default ActivityHome
