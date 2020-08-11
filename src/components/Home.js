/** @jsx jsx*/
import Search from './Search';
import { css, jsx } from '@emotion/core';
function Home() {
  return (
    <div>
      <h1>Welcome To Github User Search!</h1>
      <p
        css={css`
          margin-bottom: 3rem;
        `}
      >
        Find any Github user quickly and simply. To get started simply enter
        their Github username into the search bar and hit enter.
      </p>
      <Search />
    </div>
  );
}

export default Home;
