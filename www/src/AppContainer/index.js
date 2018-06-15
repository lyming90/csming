import React from 'react';
import AppWrapper from '../Container';

const App = () => {
  const appStyle = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '20px',
  }

  return (
    <div className='App' style={appStyle}>
      <AppWrapper />
    </div>
  )
}

export default App;