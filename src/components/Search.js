/** @jsx jsx */
import { useState } from 'react';
import User from './User';
import axios from 'axios';
import { css, jsx } from '@emotion/core';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!searchText) {
      alert('You must enter a name to search!');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${searchText}`
      );
      if (!response.data.items.length) {
        alert('No users found with that name.');
      }
      setUsers(response.data.items);
      setIsLoading(false);
    } catch (err) {
      alert('Something went wrong, please try again.');
    }
    setIsLoading(false);

    setSearchText('');
  };

  return (
    <div>
      <h1>Search Users On Github</h1>
      <form
        onSubmit={handleSubmit}
        css={css`
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <input
          placeholder="Enter user to search"
          onChange={handleChange}
          type="text"
          value={searchText}
          css={css`
            width: 20%;
            height: 1.5rem;
            margin-bottom: 17px;
            padding-left: 7px;
          `}
        />
        <button
          type="submit"
          css={css`
            width: 15%;
            background-color: black;
            color: white;
            height: 2rem;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 1rem;
            border: none;
            outline: none;
            cursor: pointer;
          `}
        >
          Search
        </button>
      </form>

      {isLoading ? (
        <div
          css={css`
            height: 150px;
            width: 150px;
            position: relative;
            left: 50%;
            top: 50px;
            transform: translateX(-50%);
          `}
        >
          {' '}
          <svg
            css={css`
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              animation: spin 1s linear infinite;
            `}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </div>
      ) : (
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-flow: row;
            grid-auto-rows: 1fr;
            grid-gap: 2rem;
            margin: 2rem;
          `}
        >
          {users.map((user) => {
            return (
              <User key={user.id} name={user.login} src={user.avatar_url} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
