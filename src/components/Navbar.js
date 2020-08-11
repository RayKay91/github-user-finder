/** @jsx jsx */
import { BrowserRouter, Link } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

const Li = styled.li`
  margin-right: 1rem;
`;

function Navbar() {
  return (
    <div>
      <h1>Github User Search</h1>
      <BrowserRouter>
        <ul
          css={css`
            display: flex;
            justify-content: flex-end;
            list-style: none;
            margin-right: 0.5rem;
          `}
        >
          <Li>
            <Link to="/">Home</Link>
          </Li>
          <Li>
            <Link to="/search">Search</Link>
          </Li>
          <Li>
            <Link to="/about">About</Link>
          </Li>
          <Li>
            <Link to="/contact">Contact</Link>
          </Li>
        </ul>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
