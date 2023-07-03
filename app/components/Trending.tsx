import React from 'react';

const Trending = () => {
  return (
    <section className='trending-container'>
      <div className='trending-card'>
        <img src='/images/image-retro-pcs.jpg' alt='PC Image' />
        <div className='inner-card'>
          <h4>01</h4>
          <h5>Reviving Retro PCs</h5>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className='trending-card'>
        <img src='/images/image-top-laptops.jpg' alt='Keyboard image' />
        <div className='inner-card'>
          <h4>02</h4>
          <h5>Top 10 Laptops of 2022 </h5>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className='trending-card'>
        <img src='/images/image-gaming-growth.jpg' alt='handcontroll' />
        <div className='inner-card'>
          <h4>03</h4>
          <h5>The Growth of Gaming</h5>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
};

export default Trending;
