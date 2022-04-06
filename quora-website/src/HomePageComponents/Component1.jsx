import { Avatar, Button } from '@material-ui/core'
import React from 'react'

export const Component1 = () => {
  return (
    <div>
        <div style={{display:"flex"}}>
            <Avatar />
            <Button href="#text-buttons" size= "large"> What do you want to ask or share?</Button>
        </div>
        <div>
            <Button>Ask</Button>
            <Button>Answer</Button>
            <Button>Post</Button>
        </div>
    </div>
  )
}
