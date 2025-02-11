import React, { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Code from '../../../components/Code';

function EventBublingExample1() {

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
                <div id="parent" onClick={handleParentClick}>
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
                    <b>Output:</b>
                    <br />
                    <code>
                        <span>Child Clicked</span>
                        <br />
                        <span>Parent Clicked</span>
                    </code>
                    <br />
                    <br />

                    <p><b>Explanation</b>:
                        The event first triggers on #child (button).
                        <br />
                        Then it bubbles up to #parent (div).
                    </p>
                </div>
            </div>


        </div>
    )
}


export default EventBublingExample1