import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Use a timeout to trigger the fade-in effect after a delay
        setTimeout(() => {
            setFadeIn(true);
        }, 500); // Adjust the delay as needed
    }, []);

    function handleLoginAsk(e) {
        e.preventDefault();
        navigate('/login');
    }

    return (
        <div className={`App1 ${fadeIn ? 'fade-in' : ''}`}>
            <div className="Form1">
                <div className="RealForm1">
                    <div className="Header">
                        <label htmlFor="signinField" id="signin2">
                            Harmony
                        </label>
                        <img src="/images/flower.png" alt="Flower" id="flowerImage"/>
                    </div>
                    <div className="InputContainer">
                        <input
                            type="text"
                            placeholder="Email"
                            className="RectangularInput" 
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="RectangularInput" 
                        />
                        <div className="Buttons">
                            <input
                                id="signinButton2"
                                type="submit"
                                value="Log In"
                                onClick={handleLoginAsk}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img src="/images/wave.png" alt="Wave" className="waveImage" />
        </div>
    );
}

export default Login;
