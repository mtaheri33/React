import React from 'react';

let ChildAppOne = (props) => {
  const newValue = 1;
  return (
    <>
      <button onClick={() => props.setValue(newValue)}>Click to change value</button>
    </>
  )
}

export default ChildAppOne;