import React from 'react';
import Aside from './Aside';
import Trending from './Trending';

const Popular = () => {
  return (
    <>
      <section className='popular-container'>
        <div className='image-container'>
          <img src='/images/image-web-3-desktop.jpg' alt='web-3-desktop' />
        </div>
        <div className='popular-text-container'>
          <h2>The Bright Future of Web 3.0?</h2>
          <div className='text-container'>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?{' '}
            </p>
            <button type='button'>Read more</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
