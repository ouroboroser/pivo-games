import React from 'react';
import './WhyThisApp.scss';

export const WhyThisApp = () => {
  return (
    <div className='whyThisAppWrapper'>
      <div className='whyThisApp'>
        <div className='whyThisAppTitle'>
          <p> Why do you need to choose our app??? </p>
          <p className='whyThisAppTitleSub'>
            {' '}
            Interesting and developing leisure{' '}
          </p>
          <p className='whyThisAppTitleSub'> Can be enjoyed together </p>
          <p className='whyThisAppTitleSub'> Broadening your horizons </p>
          <p className='whyThisAppTitleSub'> More than just an app! </p>
        </div>
        <div className='whyThisAppImg'>
          <img
            src={`${process.env.PUBLIC_URL}/img/whythisapp.webp`}
            alt='login'
            width='250'
          />
        </div>
      </div>
    </div>
  );
};
