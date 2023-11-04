import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {

  const footerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: 0,
    padding: '2px 0',
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none', 
  };
  const textStyle: React.CSSProperties = {
    fontSize: '10px', // Adjust the font size here
  };
  return <footer style={footerStyle}>
      <p className="text-xs" style={textStyle}>
        Thanks, <Link href="https://x.com/FroggyCyborg" style={linkStyle}>🐸🤖</Link>, for letting us use your fishing rod.
      </p>
  </footer>;
};

export default Footer;