import React from 'react';
import Container from '../Container';

const App = () => {
  const appStyle = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '20px',
  }

  return (
    <div className='App' style={appStyle}>
      <Container />
    </div>
  )
}

export default App;