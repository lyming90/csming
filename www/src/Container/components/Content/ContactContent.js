import React from 'react';
import Header from './Header';
import './style.css';

const ContactContent = (props) => {
  return (
    <div className='contact-content'>
      <Header Text='Contact' />
      <p>You are very welcome to drop me a message!</p>
      <p>If you would like to contact me, you can send me an Email. My Email address is&nbsp;<a href="mailto:lyming90@gmail.com">lyming90@gmail.com</a>.</p>
      <p>Alternatively, you can find me on <a href="https://www.linkedin.com/in/mingyuliu16">LinkedIn</a> and <a href="https://www.facebook.com/mingyuliu1916/">Facebook</a>.</p>
    </div>
  );
};

export default ContactContent;