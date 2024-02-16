import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = 'rgb(190, 248, 229)';
        const timer = setTimeout(() => {
            // navigate('/homepage'); //check path
        }, 5000); // animation stays for 5 seconds

        return () => {
            // Change the body's background color back when the component is unmounted
            document.body.style.backgroundColor = 'whitesmoke';
            clearTimeout(timer); //cleanup on component unmount
        }
    }, [navigate]);

    return (
        <> 
            <div className='container_landing'>
            <img src="../src/assets/pokemonLogo-bw.png" alt="Pokemon Logo" className='logo' />
                <div className='animated_image'></div>
                <div className='background_image'></div> 
                <div className='body_landing'>
                    {/* <img src="../src/assets/images/landingpage/bulbasaur.png" alt='LandingPage' className='landing_image' /> */}
                </div>
            </div>
        </>
        
    )
}

export default LandingPage;