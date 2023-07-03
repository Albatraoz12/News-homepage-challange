'use client';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='navbar-image'>
        <img src='images/logo.svg' alt='Logo' />
      </div>
      <div>
        {isMobile && !menuOpen ? (
          <span className='menu-icon'>
            <img
              onClick={() => setMenuOpen(true)}
              src='/images/icon-menu.svg'
              alt='menu icon'
            />
          </span>
        ) : null}

        {menuOpen && isMobile && (
          <>
            <span>
              <img
                onClick={() => setMenuOpen(false)}
                src='/images/icon-menu-close.svg'
                alt='menu icon'
                className='menu-icon-open'
              />
            </span>
            <ul className='nav-mobile-list'>
              <li className='list-mobile-items'>
                <a href='#'>Home</a>
              </li>
              <li className='list-mobile-items'>
                <a href='#'>New</a>
              </li>
              <li className='list-mobile-items'>
                <a href='#'>Popular</a>
              </li>
              <li className='list-mobile-items'>
                <a href='#'>Trending</a>
              </li>
              <li className='list-mobile-items'>
                <a href='#'>Categories</a>
              </li>
            </ul>
          </>
        )}

        {!isMobile && (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
