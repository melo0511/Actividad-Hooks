import React from 'react'

export const Buttons = ({click,identifier,textButton}) => {
  return (
    <button onClick={click} id={identifier}>{textButton}</button>
  )
}
