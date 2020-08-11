import React from 'react';
import { useHistory } from 'react-router-dom';

function FourOhFour() {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Looks like you've come to a page that we don't have...</h1>
      <p>Try going back to the home page and starting again :D</p>
      <button onClick={handleClick}>Click here to go home :)</button>
    </div>
  );
}

export default FourOhFour;
