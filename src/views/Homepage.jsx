import { useState } from 'react';
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

      <img src="../src/assets/images/BW_chars/wartortlebw.png" alt="Pokemon Char" className='char' />

      {/* <div className={`silhouette ${animate ? 'animate' : ''}`}></div> */}

      <div className='button_container'>
        <button onClick={() => {}}>Choose Player</button>
        <button onClick={handleRandomPlayer}>Random Player</button>
      </div>
    </div>
  );
}

export default Homepage;