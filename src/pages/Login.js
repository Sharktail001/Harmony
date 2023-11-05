import React, { useEffect, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const [fadeIn, setFadeIn] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        // Use a timeout to trigger the fade-in effect after a delay
        setTimeout(() => {
            setFadeIn(true);
        }, 500); // Adjust the delay as needed
    }, []);

    function handleLoginAsk(e) {
        e.preventDefault();
        navigate('/HomePage');
    }

    async function loginUser(event) {
        event.preventDefault()
    
        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),
        })
        
        const data = await response.json();
        
        if(data.user){
            localStorage.setItem('token', data.user)
            navigate('/HomePage')
        }
        else{
            //add error message
        }
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
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                            className="RectangularInput" 
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            className="RectangularInput" 
                        />
                        <div className="Buttons">
                            <input
                                id="signinButton2"
                                type="submit"
                                value="Log In"
                                onClick={loginUser}
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