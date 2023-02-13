import React from 'react';

let ChildAppOne = (props) => {
  return (
    <>
      <h2>Child App One:</h2>
      <p>{props.name} line 1</p>
      <p>{props.name} line 2</p>
      <p>{props.newLine}</p>
    </>
  )
}

export default ChildAppOne;