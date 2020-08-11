import React, { useState } from 'react';
import User from './User';
import axios from 'axios';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchText}`
    );
    setUsers(response.data.items);
    setSearchText('');
  };

  return (
    <div>
      <h1>Search Users On Github</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={searchText} />
        <button type="submit">Search</button>
      </form>

      {users.map((user) => {
        return <User key={user.id} name={user.login} src={user.avatar_url} />;
      })}
    </div>
  );
}

export default Search;
