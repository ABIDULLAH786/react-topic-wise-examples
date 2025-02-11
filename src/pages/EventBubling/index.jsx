import React from 'react'
import TopicTitle from '../../components/TopicHeading'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import EventCapturingExample1 from './examples/EventCapturingExample1'

function EventCapturingTopic() {
    return (
        <div>
            <TopicTitle title={"EventCapturing"} />
            <div className='description'>
                <ul>
                    <li>
                        The event starts from the topmost element (document or window) and trickles down to the target element.
                    </li>
                    <li>
                        To enable capturing, pass true as the third parameter in <code><i>addEventListener()</i></code>.
                    </li>
                    <li>
                        To enable capturing, pass true as the third parameter in
                        <code>
                            <pre>
                                {` document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked")
}, true); // Capturing mode`}
                            </pre>
                        </code>
                    </li>
                    <li>If we want to enable it in reactjs then we have to use the <code>onClickCapture</code> instead of <code>onClick</code></li>
                </ul>
            </div>
            <div>
                <details>
                    <summary className='example_url'>EventCapturing Example</summary>
                    <EventCapturingExample1 />
                </details>
                {/* <Link to={'examples/ex1'} className='example_url'>Click here for EventCapturing example</Link> */}
            </div>
            <div className='sub_topic_container'>
                <Outlet />
            </div>
        </div>
    )
}

export default EventCapturingTopic