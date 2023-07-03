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

      <section className='trending-container'>
        <div className='trending-card'>
          <img src='/images/image-retro-pcs.jpg' alt='PC Image' />
          <div className='inner-card'>
            <h4>01 </h4>
            <h5>Reviving Retro PCs</h5>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className='trending-card'>
          <img src='/images/image-top-laptops.jpg' alt='Keyboard image' />
          <div className='inner-card'>
            <h4>02 </h4>
            <h5>Top 10 Laptops of 2022 </h5>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className='trending-card'>
          <img src='/images/image-gaming-growth.jpg' alt='handcontroll' />
          <div className='inner-card'>
            <h4>03 </h4>
            <h5>The Growth of Gaming</h5>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
