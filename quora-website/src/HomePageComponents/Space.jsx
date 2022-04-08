import React from 'react'
import HomeLeftSpace from './HomeLeftSpace/HomeLeftSpace'

export const Space = () => {
    return (
        <div style={{ display: 'flex', justifyContent: "space-around" }}>
            <HomeLeftSpace />
        </div>
    )
}

export default Space