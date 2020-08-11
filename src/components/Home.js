import React from 'react';
import Search from './Search';
function Home() {
  return (
    <div>
      <h1>Welcome To Github User Search!</h1>
      <p>
        Find any Github user quickly and simply. To get started simply enter
        their github username into the search bar and hit enter.
      </p>
      <Search />
    </div>
  );
}

export default Home;
