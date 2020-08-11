import React from 'react';
import styled from '@emotion/styled';

const Div = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

function Footer() {
  return <Div>Made with {'<3'} by RayKay91 </Div>;
}

export default Footer;
