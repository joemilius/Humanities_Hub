import React from 'react'
import ActivityList from './ActivityList'
import ActivitiyForm from './ActivityForm'

const ActivityHome = (currentGroup) => {
    return (
        <div>
            <ActivityForm />
            <ActivityList currentGroup={currentGroup}/>
        </div>
    )
}

export default ActivityHome
