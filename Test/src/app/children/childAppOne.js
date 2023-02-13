import React from 'react';

let ChildAppOne = (props) => {
  // console.log(props.children[0]);
  return (
    <>
      <h2>Child App One:</h2>
      <p>{props.name} line 1</p>
      <p>{props.name} line 2</p>
      <p>{props.newLine}</p>
      {/* When there is only one element, use props.children without any indexing */}
      {props.children}
    </>
  )
}

export default ChildAppOne;