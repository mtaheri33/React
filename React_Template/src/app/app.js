import React from 'react';

let DefaultApp = () => {
  let firstValue = 1;
  let secondValue = 2;
  return (
    <>
      <h1>React Application Template</h1>
      <label>Test sum is : {firstValue + secondValue}</label>
    </>
  )
}

export default DefaultApp;