import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {

  const footerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    padding: '10px 0',
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none', 
  };

  return <footer style={footerStyle}>
      Thank you, <Link href="https://x.com/FroggyCyborg" style={linkStyle}>🐸🤖</Link>, for letting us use your fishing rod.
  </footer>;
};

export default Footer;