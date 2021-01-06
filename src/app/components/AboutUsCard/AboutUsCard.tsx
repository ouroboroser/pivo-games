import React from 'react';
import './AboutUsCard.scss';

type AboutUsCardProps = {
  title: string;
  img: string;
};

export const AboutUsCard: React.FC<AboutUsCardProps> = ({ title, img }) => {
  return (
    <div className='aboutUs'>
      <div className='aboutUsTitle'>
        <p> {title} </p>
      </div>
      <div className='aboutUsImg'>
        <img
          src={`${process.env.PUBLIC_URL}/img/${img}`}
          alt='login'
          width='250'
        />
      </div>
    </div>
  );
};
