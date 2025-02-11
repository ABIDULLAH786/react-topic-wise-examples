import React from 'react'
import { Outlet } from 'react-router-dom'
import TopicTitle from '../../components/TopicHeading'

function Hooks() {
    return (
        <div>
            <div className='topic_container'>
                <div>
                    <TopicTitle title={"Hooks"} />
                    <p className='description'>
                        Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.
                    </p>
                </div>
                <div className='sub_topic_container'>

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Hooks