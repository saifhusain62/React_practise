import React from 'react'

const status = false;
function TernaryOperator() {
  return (
    <div>
        {status?
        <button>Hello Logout Please </button>
        :
        <button>Hello Login Please</button>

        }

    </div>
  ) 
}

export default TernaryOperator