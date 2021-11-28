import React from 'react'
import ActivityCard from './ActivityCard'

const ActivityList = ({currentGroup}) => {
    return (
        <div>
            <ActivityCard currentGroup={currentGroup}/>
        </div>
    )
}

export default ActivityList
