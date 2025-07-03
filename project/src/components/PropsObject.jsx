import React from 'react'

function PropsObject(props) {
  return (
    <div>
        <h1>{props.item.name}</h1>
        <h1>{props.item.ID}</h1>
        <h1>{props.item.city}</h1>
    </div>
  )
}

export default PropsObject