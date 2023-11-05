import './Welcome.css';
import {useNavigate} from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate()
    function handleLoginAsk(e){
        e.preventDefault();
        navigate('/login');
    }

    function handleRegisterAsk(e){
        e.preventDefault();
        navigate('/register');
    }
    
  return (
    <div className="App1">
        <div className = "Form1">
            <div className = "RealForm1">
                <label for="signinField" id="signin2">Harmony</label>
                <p for="welcoming" id = "welcomeMessage">Insure your business, enhance your Harmony. </p>
                <div className = "Buttons">
                    <input id="signinButton2" type="submit" value="Sign In" onClick={handleLoginAsk}/>
                    <input id="signupButton3" type="submit" value="Sign Up" onClick={handleRegisterAsk}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Welcome;