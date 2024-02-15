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
                <img src="../assets/images/landingpage/bulbasaur.png" alt='LandingPage' className='landing_img' />
            </div>
        </>
        
    )
}

export default LandingPage;