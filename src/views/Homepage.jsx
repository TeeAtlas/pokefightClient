import { useState } from 'react';
// import Button from '@material-ui/core';
import './HomePage.css';

function Homepage () {
  const [animate, setAnimate] = useState(false);

  const handleRandomPlayer = () => {
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 10000); // Stop the animation after 10 seconds
  };

  return (
    <div className='container_homepage'>
      <h1 className='title'>Ready Player One</h1>
      <div className={`silhouette ${animate ? 'animate' : ''}`}></div>

      <div className='button_container'>
        <button onClick={() => {}}>Choose Player</button>
        <button onClick={handleRandomPlayer}>Random Player</button>
      </div>
    </div>
  );
}

export default Homepage;