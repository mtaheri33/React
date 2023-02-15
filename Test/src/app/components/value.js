import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Value = function () {
  const params = useParams();
  let number = params['number'] ? params['number'] : 'no number provided';

  const navigate = useNavigate();
  const buttonFunction = function () {
    navigate('/value/1');
  }

  return (
    <>
      <p>Value: {number}</p>
      <button onClick={buttonFunction}>Click to use a default value</button>
    </>
  )
}

export default Value;