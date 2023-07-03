import React from 'react';

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

      <aside className='aside'>
        <h3>New</h3>
        <div className='card'>
          <h4> Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className='card'>
          <h4> The Downsides of AI Artistry</h4>
          <p>
            {' '}
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className='card'>
          <h4> Is VC Funding Drying Up?</h4>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>{' '}
      </aside>
    </>
  );
};

export default Popular;
