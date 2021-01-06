import React from 'react';
import './AboutUs.scss';

import { AboutUsCard } from '../../components';
import { AboutUsTitle, AboutUsImg } from './AboutUs.enum';

export const AboutUs = () => {
  return (
    <div className='whyThisAppWrapper2'>
      <p id='aboutUsTitle'> Наша история </p>
      <AboutUsCard title={AboutUsTitle.item1} img={AboutUsImg.item1Img} />
      <AboutUsCard title={AboutUsTitle.item2} img={AboutUsImg.item2Img} />
      <AboutUsCard title={AboutUsTitle.item3} img={AboutUsImg.item3Img} />
      <AboutUsCard title={AboutUsTitle.item4} img={AboutUsImg.item4Img} />
      <AboutUsCard title={AboutUsTitle.item5} img={AboutUsImg.item5Img} />
    </div>
  );
};
