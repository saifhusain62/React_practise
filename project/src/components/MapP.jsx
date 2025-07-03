import React from 'react'


const name = ['Saif','Alif','Asif','Akib']
function MapP() {
  return (
    <div>
        <ol>
            {
                name.map((n,i)=>{

                      return <li key={i.toString()}>{n}</li>
                })
            }
        </ol>

    </div>
  )
}

export default MapP