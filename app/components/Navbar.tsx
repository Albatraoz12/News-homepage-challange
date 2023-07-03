import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>HomePage</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Home
            </a>
          </li>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              New
            </a>
          </li>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Popular
            </a>
          </li>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Trending
            </a>
          </li>
          <li>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Categories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
