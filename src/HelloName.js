import React from 'react'

function HelloName (props) {
    return (
        <p className="App-intro" onClick={(event) => {
            alert(`You just clicked ${props.name}!`)
          }}>
          Hello {props.name}
        </p>
    )
}

export default HelloName