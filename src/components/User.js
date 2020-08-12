/** @jsx jsx */

import { useHistory } from 'react-router-dom';
import { css, jsx } from '@emotion/core';

function User({ src, name }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/user_profile/${name}`);
  };

  return (
    <div
      css={css`
        border: 1px solid black;
        border-radius: 2px;
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

      <p className="user-details">{name}</p>
      <button
        css={css`
          background-color: black;
          color: white;
          padding: 8px;
          text-decoration: none;
          outline: none;
          border: none;
          border-radius: 2px;
          letter-spacing: 1.5;
          cursor: pointer;
          border: 2px solid black;
          transition: 0.1s all ease-in-out;
          &:hover {
            color: black;
            background-color: white;
          }
        `}
        onClick={handleClick}
      >
        View profile →
      </button>
    </div>
  );
}

export default User;
