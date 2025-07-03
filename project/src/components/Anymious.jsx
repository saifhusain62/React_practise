import React from 'react'


let marks = 90;
function Anymious() {
  return (
    <div>
        {(
            ()=>{
              if(marks>80){
                return <h1>Good</h1>
              }
              else{
                return <h1>bad Broh</h1>
              }

            }

        )()}
    </div>
  )
}

export default Anymious