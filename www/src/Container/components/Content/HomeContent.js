import React from 'react';
import Header from './Header';
import './style.css';

const HomeContent = (props) => {
  return (
    <div className='home-content'>
      <Header Text='Home' />
      <p className='upsize'>Hi! My name is 刘明宇 (Liu Mingyu - in which Liu is my surname). I am a rising junior at Nanyang Technological University with a major in Computer Science and a possible minor in Mathematics.</p>
      <p className='upsize'>I am a self-driven and curious person who always look forward to new adventures and embrace latest technologies. I aim to design and create software solutions that are high-quality, robust and beautifully-presented. Besides my interest in Computer Science, I also enjoy traveling and hiking.</p>
    </div>
  );
};

export default HomeContent;