import React from 'react'

const city = ['A','B','C','D']
function Map() {
  return (
    <div>
       <ul>
        {
            city.map((item,i)=>{

              return <li key={i.toString()}>{item}</li>
            })
        }
       </ul>

    </div>
  )
}

export default Map