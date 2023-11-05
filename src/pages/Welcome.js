import React, { useEffect, useState } from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure to import Login.css

function Welcome() {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const flowerImage = document.getElementById('flowerImage');
        flowerImage.style.opacity = 1;
    }, []);

    function handleLoginAsk(e) {
        e.preventDefault();
        setFadeOut(true); // Trigger the fade-out effect
        setTimeout(() => {
            navigate('/Login'); // Navigate after the fade-out effect
        }, 1000); // Adjust the delay as needed for the fade-out effect
    }

    function handleRegisterAsk(e) {
        e.preventDefault();
        navigate('/HomePage');
    }

    return (
        <div className={`App1 ${fadeOut ? 'fade-out' : ''}`}>
            <div className="Form1">
                <div className="RealForm1">
                    <div className="Header">
                        <label htmlFor="signinField" id="signin2">
                            Harmony
                        </label>
                        <img src="/images/flower.png" alt="Flower" id="flowerImage" className="fade-in" />
                    </div>
                    <div className="WelcomeContainer">
                        <p htmlFor="welcoming" id="welcomeMessage">
                            Insure your business and enhance your harmony
                        </p>
                        <div className="Buttons">
                            <input id="signinButton2" type="submit" value="Log In" onClick={handleLoginAsk} />
                            <input id="signupButton3" type="submit" value="Sign Up" onClick={handleRegisterAsk} />
                        </div>
                    </div>
                </div>
            </div>
            <img src="/images/wave.png" alt="Wave" className="waveImage" />
        </div>
    );
}    

export default Welcome;
