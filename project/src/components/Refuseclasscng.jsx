import React, { useRef } from 'react'

function Refuseclasscng() {

    const text = useRef();

    const change = ()=>{
        text.current.classList.add("text-secondary");
        text.current.classList.remove("text-primary");
        

    }
  return (
    <div>
        <h1 className='text-primary' ref={text}>My name is Saif husain </h1>
        <button onClick={change}>Click</button>

    </div>
  )
}

export default Refuseclasscng