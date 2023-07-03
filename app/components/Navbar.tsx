import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-image'>
        <img src='images/logo.svg' alt='Logo' />
      </div>
      <div>
        <ul className='nav-list'>
          <li className='list-items'>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Home
            </a>
          </li>
          <li className='list-items'>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              New
            </a>
          </li>
          <li className='list-items'>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Popular
            </a>
          </li>
          <li className='list-items'>
            <a href='http://' target='_blank' rel='noopener noreferrer'>
              Trending
            </a>
          </li>
          <li className='list-items'>
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
