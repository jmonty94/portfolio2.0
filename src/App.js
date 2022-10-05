import React from 'react';
import Portfolio from './components/Portfolio';
import Background from './images/Sea.mp4'




function App() {
  return (
    <div className='main'>
      <video autoPlay loop muted id='video'>
        <source src={Background} type='video/mp4'></source>
      </video>
      <Portfolio/>
    </div>
  );
}

export default App;
