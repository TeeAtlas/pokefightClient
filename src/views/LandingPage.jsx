import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/homepage'); //check path
        }, 10000); // animation stays for 5 seconds

        return () => clearTimeout(timer); //cleanup on component unmount
    }, [navigate]);

    return (
        <> 
            <div className='container_landing'>

                <div className='background_image'></div> 
                <div className='body_landing'>
                    <img src="../src/assets/images/landingpage/bulbasaur.png" alt='LandingPage' className='landing_image' />
                </div>
            </div>
        </>
        
    )
}

export default LandingPage;