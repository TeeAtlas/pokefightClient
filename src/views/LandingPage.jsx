import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/homepage'); //check path
        }, 5000); // animation stays for 5 seconds

        return () => clearTimeout(timer); //cleanup on component unmount
    }, [navigate]);

    return (
        <> 
            <div className='container_landing'>
                <div className='background_image'></div> 
                <img src="../src/assets/pokemonLogo-bw.png" alt="Pokemon Logo" className='logo' />
                    <div className='body_landing'>
                        <img 
                            src="../src/assets/images/landingpage/bulbasaur.png" 
                            alt='LandingPage' 
                            className={`landing_image ${animate ? 'animate' : ''}`} 
                            onClick={() => setAnimate(true)} />
                    </div>
            </div>
        </>
        
    )
}

export default LandingPage;