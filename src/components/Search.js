/** @jsx jsx */
import { useState } from 'react';
import User from './User';
import axios from 'axios';
import { css, jsx } from '@emotion/core';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText) {
      alert('You must enter a name to search!');
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
    } catch (err) {
      alert('Something went wrong, please try again.');
    }
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
          return <User key={user.id} name={user.login} src={user.avatar_url} />;
        })}
      </div>
    </div>
  );
}

export default Search;
