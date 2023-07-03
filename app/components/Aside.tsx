import React from 'react';

const Aside = () => {
  return (
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
  );
};

export default Aside;
