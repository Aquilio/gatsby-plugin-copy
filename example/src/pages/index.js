import React from 'react'

class IndexComponent extends React.Component {
  render () {
    return (
      <div>
      <p>
        Welcome to the GatsbyJS File Copy Demo.
        <a href="/env.txt">Click here</a> 
        to see the copied env.txt file.
      </p>
    </div>
    )
  }
}

export default IndexComponent
