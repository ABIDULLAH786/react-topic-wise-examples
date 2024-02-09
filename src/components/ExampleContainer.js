import React from 'react'
import { Outlet } from 'react-router-dom'

function ExampleContainer() {
    return (
        <div className='example_container'>
            <div>
                <Outlet/>
            </div>
        </div>

    )
}

export default ExampleContainer