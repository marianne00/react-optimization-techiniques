import React from 'react'

const DemoOutput = (props) => {

  console.log('reevauluating demo output')

  return (
    <div>
      { props.show ? 'This is new' : '' }
    </div>
  )
}

export default React.memo(DemoOutput)