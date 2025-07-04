import React from 'react'

function Formsubmitted() {

    const submitted = (e)=>{
        e.preventDefault();
        alert('Submitted Form')


    }
  return (
    <div>
        <form onSubmit={submitted}>
            <input type="text" placeholder='Name' />
            <button>Submit</button>

        </form>
    </div>
  )
}

export default Formsubmitted