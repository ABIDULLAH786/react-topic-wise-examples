import React from 'react'
import SubTitleHeading from '../../../components/SubTitleHeading'
import { Link } from 'react-router-dom'

function UseCallback() {
    return (
        <div>
            <SubTitleHeading title={'useCallback'} />

            <div>
                <div>
                    <ul>
                        <li>
                            It is a React Hook that allows you to cache a function definition between re-renders.
                        </li>
                        <li>
                            It’s particularly useful when dealing with functions that are passed as props or used within other hooks. By memoizing the function, you can prevent unnecessary re-creations and optimize performance.
                        </li>
                        <br />
                        <h5>Problem It Solves:</h5>
                        <li><b>Unnecessary Re-renders:</b> When you pass a callback function as a prop to a child component, React creates a new function instance on every render (even if its logic hasn't changed). This can lead to unnecessary child component re-renders, affecting performance.
                        </li>
                        <li>
                            <b>Referential Identity and Equality Checks:</b> React compares components during diffing using referential equality (strict comparison of object references). If you create a new callback function on every render, even if its contents are identical, React will consider it a different function and trigger a re-render of the child component. useCallback helps avoid this by ensuring the same function reference is passed down if its dependencies haven't changed.

                        </li>
                    </ul>


                </div>
                <div>
                    <Link to={'/examples/use-callback-example1'} className='example_url'>Click here for useCallback example</Link>
                </div>
                <div>
                    <Link to={'/examples/use-callback-example2'} className='example_url'>Click here for without useCallback example</Link>
                </div>
                <div>
                    <Link to={'/examples/use-callback-example3'} className='example_url'>Click here for useCallback example with real scenario</Link>
                </div>
            </div>
        </div>
    )
}

export default UseCallback