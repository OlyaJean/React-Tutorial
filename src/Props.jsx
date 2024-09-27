import React from 'react'

const Props = (props) => {
  return (
    <div>
        <p>We are at the Props component!</p>
        <p>{props.count}</p>
        {/* Now x element is here also. And we don't need any function for it to be executed in this component */}
      
    </div>
  )
}

export default Props
