/** @jsx jsx */

import { useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';

function User({ src, name }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/users/:id');
  };

  return (
    <div
      css={css`
        background-color: lightsalmon;

        padding: 2rem;
      `}
    >
      <img
        css={css`
          height: 10rem;
          border-radius: 50%;
        `}
        src={src}
        alt={name}
      />

      <p>{name}</p>
      <button onClick={handleClick}>View this user</button>
    </div>
  );
}

export default User;
