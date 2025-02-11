import React from 'react'
import TopicTitle from '../../components/TopicHeading'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import EventBublingExample1 from './examples/EventBublingExample1'

function EventBublingTopic() {
    return (
        <div>
            <TopicTitle title={"EventBubling"} />
            <div className='description'>
                <ul>
                    <li>
                    The event starts from the target element (where it was triggered) and moves upward to its ancestors.
                    </li>
                    <li>
                    This happens when  <code><i>addEventListener()</i> is called without a third parameter (or false)</code>.
                    </li>
                    <li>
                        To enable capturing, pass true as the third parameter in
                        <code>
                            <pre>
                                {` document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked")
}, false); // bubbling mode, make it fasel or leave it without any bool parameter`}
                            </pre>
                        </code>
                    </li>
                    <li>If we want to enable it in reactjs then we have to use the <code>onClick</code></li>
                </ul>
            </div>
            <div>
                <details>
                    <summary className='example_url'>EventBubling Example</summary>
                    <EventBublingExample1 />
                </details>
            </div>
            <div className='sub_topic_container'>
                <Outlet />
            </div>
        </div>
    )
}

export default EventBublingTopic