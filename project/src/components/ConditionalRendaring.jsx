import React from 'react'

const ChangeButton = (status)=>{
    if(status){
        return <button>LogOut</button>
    }
    else{
        return <button>Login</button>
    }
}

function ConditionalRendaring() {
  return (
    <div>
        <h1>Status</h1>
        {ChangeButton(true)}

    </div>
  )
}

export default ConditionalRendaring