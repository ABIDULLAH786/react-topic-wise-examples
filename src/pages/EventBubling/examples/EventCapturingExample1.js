import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Code from '../../../components/Code';

function EventCapturingExample1() {
    const navigation = useNavigate()

    const handleParentClick = () => {
        console.log("parent element clicked")
    }
    const handleChildClick = () => {
        console.log("child element clicked")
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <h5></h5>
                {/* <p style={{ cursor: 'pointer' }} onClick={() => navigation(-1)}>X</p> */}
            </div>

            <div>
                <div id="parent" onClickCapture={handleParentClick}>
                    <button id="child" onClick={handleChildClick}>Click Me</button>
                </div>
                <Code>
                    {`
const handleParentClick = () => {
    console.log("parent element clicked")
}
const handleChildClick = () => {
    console.log("child element clicked")
}



<div id="parent" onClickCapture={handleParentClick}>
    <button id="child" onClick={handleChildClick}>Click Me</button>
</div>`
                    }
                </Code>


                <div>
                    <p><b>Explanation</b>: Event capturing is a technique where events are captured from deepest to shallowest child elements. When an event occurs, the event handler on the capturing element is invoked first, then on the capturing element's parent, and so on, up to the root element. In this example, when the parent element is clicked, the console log will be triggered first (parent element clicked), followed by the child element clicked (child element clicked). This is the opposite of event bubbling, where the event handler on the target element is invoked first, then on the parent element, and so on, up to the root element.</p>
                    <b>Output:</b>
                    <br />
                    <code>
                        <span>Parent Clicked</span>
                        <br />
                        <span>Child Clicked</span>
                    </code>
                </div>
            </div>


        </div>
    )
}


export default EventCapturingExample1