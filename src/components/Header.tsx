import {Link} from "react-router-dom";

const headerStyle: React.CSSProperties = {
  backgroundColor: "#333",
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#FFF',
  fontWeight: 700,
  padding: '24px',
};

const headerLinkStyle: React.CSSProperties = {
  color: '#FFF',
  textDecoration: 'none',
};


export const Header = () => {
  return (
      <header style={headerStyle}>
        <a style={headerLinkStyle} href="/">Blog</a>
        <Link to="contact" style={headerLinkStyle}>お問い合わせ</Link>
      </header>
  );
};