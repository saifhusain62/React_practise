import React, { useRef } from 'react'

function Multipleref() {

    let firstname,lastname = useRef();

    const change = () =>{
                
           const fname = firstname.value;
           const lname = lastname.value; 
           alert(fname + " " + lname);

           
    }
  return (
    <div>
        <input type="text" ref={(a)=> firstname = a} />
        <input type="text" ref={(b)=> lastname = b} />
        <button onClick={change}>Click</button>

    </div>
  )
}

export default Multipleref