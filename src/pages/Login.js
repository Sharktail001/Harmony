import './Login.css';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import { gapi } from 'gapi-script';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import { GoogleLogin } from '@react-oauth/google';

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleRegisterAsk(e){
        e.preventDefault();
        navigate('/register');
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
        <div className="App2">
            <div className = "Form2">
                <div className = "RealForm2">
                    <form onSubmit = {loginUser}>
                        <label for="signinField" id="signin">Sign In</label>
                        <label for="personNameField" class = "labels2" id = "personName">Username</label>
                        <input 
                            class="inputs2"
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                            type="text"  
                        />
                        <br />
                        <label for="passwordField" class = "labels2" id = "password">Password </label>
                        {/* <br /> */}
                        <input 
                            class="inputs2"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            type="password"  
                        />
                        <input className='Buttons' id="signinButton" type="submit" value="Sign In"/>
                        {/* <br />
                        
                        <p className="or"> or </p>
                        <div className="googleBtn">
                            <button className="googleBtn">
                        <GoogleOAuthProvider clientId="436198478288-efo40fbhrj324kk9uktqfr20tthrt5dk.apps.googleusercontent.com">
                        <GoogleLogin
                            id = "googleButton"
                            onSuccess={googleAuth}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        > test </GoogleLogin> 
                        </GoogleOAuthProvider>
                        </button>
                        </div>
                        <p id = "noAccount">Don't have an account?</p>
                        <input className='Buttons' id="signupButton2" type="submit" value="Click here to sign up!" onClick={handleRegisterAsk}/> */}
                        
                        
                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;