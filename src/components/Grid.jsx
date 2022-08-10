// Create Grid function component and pass in props

import React from 'react'


export default function Grid({children}) {
    return (
        <div className="grid">
            {children}
        </div>
    )
}