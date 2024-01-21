// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', flexDirection: 'row', listStyle: 'none', padding: 0 }}>
        <li style={{ marginRight: '10px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ marginRight: '10px' }}>
          <Link to="/new-player">New Player</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;



