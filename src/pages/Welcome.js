import React, { useEffect } from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';
import './Login'

function Welcome() {
    const navigate = useNavigate();

    useEffect(() => {
        const flowerImage = document.getElementById('flowerImage');
        flowerImage.style.opacity = 1;
    }, []);

    function handleLoginAsk(e) {
        e.preventDefault();
        navigate('/Login');
    }

    function handleRegisterAsk(e) {
        e.preventDefault();
        navigate('/HomePage');
    }

    return (
        <div className="App1">
            <div className="Form1">
                <div className="RealForm1">
                <div className="Header">
                    <label htmlFor="signinField" id="signin2">
                        Harmony
                    </label>
                    <img src="/images/flower.png" alt="Flower" id="flowerImage" className="fade-in" />
                </div>
                    <p htmlFor="welcoming" id="welcomeMessage">
                        Insure your business and enhance your harmony
                    </p>
                    <div className="Buttons">
                        <input id="signinButton2" type="submit" value="Log In" onClick={handleLoginAsk} />
                        <input id="signupButton3" type="submit" value="Sign Up" onClick={handleRegisterAsk} />
                    </div>
                </div>
            </div>
            <img src="/images/wave.png" alt="Wave" className="waveImage" />
        </div>
    );
}

export default Welcome;
