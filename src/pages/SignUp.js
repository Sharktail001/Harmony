import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Trigger the fade-in effect with a slight delay
        setTimeout(() => {
            setFadeIn(true);
        }, 50); // Adjust the delay as needed
    }, []);

    function handleLoginAsk(e) {
        e.preventDefault();
        navigate('/HomePage');
    }

    return (
        <div className={`App1 ${fadeIn ? 'fade-in' : ''}`}>
            <div className="Form1">
                <div className="RealForm1">
                    <div className="Header">
                        <label htmlFor="signinField" id="signin2">
                            Harmony
                        </label>
                        <img src="/images/flower.png" alt="Flower" id="flowerImage" />
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
