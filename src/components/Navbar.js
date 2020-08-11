/** @jsx jsx */
import { NavLink } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import '../App.css';

const Li = styled.li`
  margin-right: 1rem;
`;

function Navbar() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin: 2rem 5rem;
      `}
    >
      <h1>Github User Search</h1>

      <ul
        css={css`
          display: flex;
          justify-content: flex-end;
          list-style: none;
          margin-right: 0.5rem;
        `}
      >
        <Li>
          <NavLink
            className="navlink"
            activeStyle={{ borderBottom: '2px solid black' }}
            exact
            to="/"
          >
            Home
          </NavLink>
        </Li>
        <Li>
          <NavLink
            className="navlink"
            activeStyle={{ borderBottom: '2px solid black' }}
            to="/search"
          >
            Search
          </NavLink>
        </Li>
        <Li>
          <NavLink
            className="navlink"
            activeStyle={{ borderBottom: '2px solid black' }}
            to="/about"
          >
            About
          </NavLink>
        </Li>
        <Li>
          <NavLink
            className="navlink"
            activeStyle={{ borderBottom: '2px solid black' }}
            to="/contact"
          >
            Contact
          </NavLink>
        </Li>
      </ul>
    </div>
  );
}

export default Navbar;
