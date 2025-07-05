import React, { useRef } from 'react'

function UseRef() {
    const headline = useRef();

    const change = ()=>{
        headline.current.innerHTML = "Hello world"
    }
  return (
    <div>
        <h1 ref={headline}></h1>
        <button onClick={change}>Click</button>

    </div>
  )
}

export default UseRef