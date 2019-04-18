// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = props => {
  return(
    <div onClick={event => props.handleClick(event)}>
      <p>I am just happy</p>
    </div>
  )
}


export default SimplerComponent
