/** @jsx jsx */
import { Component } from 'react';
import axios from 'axios';
import { css, jsx } from '@emotion/core';

class UserProfile extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const user = await axios.get(
      `https://api.github.com/users/${this.props.match.params.user_id}`
    );
    this.setState({ user: user.data });
  }

  render() {
    const {
      login,
      avatar_url,
      name,
      bio,
      email,
      company,
      hireable,
      html_url,
    } = this.state.user;

    return (
      <div
        css={css`
          width: 33%;
          height: 25%;
          border-radius: 4px;
          border: 1px solid black;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        `}
      >
        <img
          css={css`
            border-radius: 50%;
            height: 200px;
          `}
          src={avatar_url}
          alt=""
        />

        <div
          css={css`
            width: 75%;
          `}
        >
          <p>
            <span className="user-details">Username: </span> {login}
          </p>
          <p>
            <span className="user-details">Name: </span>{' '}
            {name ? name : 'No name provided'}
          </p>
          <p>
            <span className="user-details">Bio: </span>{' '}
            {bio ? bio : 'No bio provided'}
          </p>
          <p>
            <span className="user-details">Email: </span>
            {email ? email : 'No email provided'}
          </p>
          <p>
            <span className="user-details">Company: </span>
            {company ? company : 'No company provided'}
          </p>
          <p>
            <span className="user-details">Hireable: </span>
            {hireable ? 'Yes' : 'No'}
          </p>
          <div
            css={css`
              margin-top: 2rem;
            `}
          >
            <a
              css={css`
                background-color: black;
                color: white;
                padding: 8px;
                text-decoration: none;
                transition: 0.1s all ease-in-out;
                &:hover {
                  border: 2px solid black;
                  color: black;
                  background-color: white;
                  font-weight: bold;
                }
              `}
              href={html_url}
            >
              Visit this user's github page →
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
