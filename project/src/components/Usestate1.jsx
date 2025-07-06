import React, { useState } from 'react'

function Usestate1() {
     const[number,setnumber] = useState(0);

     const change = ()=>{
        setnumber(number+1);
     }

  return (
    <div>
         <h1>Number:{number}</h1>
         <button onClick={change}>Click</button>

    </div>
  )
}

export default Usestate1