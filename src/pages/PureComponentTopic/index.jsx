import React from 'react'
import TopicTitle from '../../components/TopicHeading'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function PureComponentTopic() {
    return (
        <div>
            <TopicTitle title={"PureComponent"} />
            <div className='description'>
                <p>
                    PureComponent is a React component that only re-renders when its props or state change. It is more efficient than class components because it does not need to re-render the entire component tree when props or state change.
                </p>
                <p>
                    However, PureComponent does not automatically implement <code><i>shouldComponentUpdate()</i></code> for you. You need to implement it manually to control when the component should re-render.
                </p>
                <p>
                    To implement the it in functional components, you need to implement it manually using <code><i>memo</i></code>.
                </p>

            </div>
            <div>
                {/* <details>
                    <summary className='example_url'>PureComponent Example</summary>
                    <PureCompExample />

                </details> */}
                <Link to={'examples/ex1'} className='example_url'>Click here for PureComponent example</Link>
            </div>
            <div className='sub_topic_container'>
                <Outlet />
            </div>
        </div>
    )
}

export default PureComponentTopic