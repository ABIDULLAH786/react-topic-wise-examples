import React from 'react'
import SubTitleHeading from '../../../components/SubTitleHeading'
import { Link } from 'react-router-dom'

function UseMemo() {
    return (
        <div>

            <SubTitleHeading title={'useMemo'} />
            <div>

                <div>
                    <Link to={'/examples/use-memo'} className='example_url'>Click here for useMemo example</Link>
                </div>
            </div>
        </div>
    )
}

export default UseMemo