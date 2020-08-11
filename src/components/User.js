import React from 'react';
import { useHistory } from 'react-router-dom';

function User({ src, name }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/users/:id');
  };

  return (
    <div>
      <img src={src} alt={name} />
      <p>{name}</p>
      <button onClick={handleClick}>View this user</button>
    </div>
  );
}

export default User;
