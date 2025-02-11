import React from 'react'
import SubTitleHeading from '../../../components/SubTopicHeading'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import UseMemoExample from './examples/example1'

function UseMemo() {
    return (
        <div>

            <SubTitleHeading title={'useMemo'} />
            <div>

                {/* <div>
                    <Link to={'examples/ex1'} className='example_url'>Click here for useMemo example</Link>
                </div> */}
                <details>
                    <summary className='example_url'>Example 1</summary>
                    <UseMemoExample />

                </details>
                
            </div>
            <div className='sub_topic_container'>
                <Outlet />
            </div>
        </div>
    )
}

export default UseMemo