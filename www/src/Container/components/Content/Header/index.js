import React from 'react';
import './style.css'

const Header = (props) => {
  return (
    <div className='header disable-select'>
      {props.Text}
    </div>
  );
};

export default Header;