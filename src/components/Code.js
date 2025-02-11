import React from 'react'

function Code({ children }) {
    return (
        <div className="code_example">
            <pre>
                <code>{children}</code>
            </pre>
        </div>
    )
}

export default Code