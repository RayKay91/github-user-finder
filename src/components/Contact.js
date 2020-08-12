/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <a
        css={css`
          font-weight: bold;
          color: rgb(0, 102, 255);
        `}
        href="https://github.com/RayKay91"
      >
        @RayKay91
      </a>
    </div>
  );
}

export default Contact;
