import React from 'react'

const Props_with_Destructuring = ({count}) => {
  return (
    <div>
        {/* Here we passed props without additional words. just a prop name with curly braces */}
         {/* We can pass multiple props using comma inside the curly braces */}
      <p>Another component for props example</p>
      <p>{count}</p>
    </div>
  )
}

export default Props_with_Destructuring
