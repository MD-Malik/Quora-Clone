import React from 'react'
import HomeLeftSpace from './HomeLeftSpace/HomeLeftSpace'
import HomeRightSpace from './HomeRightSpace/SpaceToFollow'

export const Space = () => {
  return (
    <div style={{ display: 'flex', justifyContent: "space-around" }}>
      <HomeLeftSpace />
      <HomeRightSpace />
    </div>
  )
}
