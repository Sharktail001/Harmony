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
        navigate('/HomePage');
    }
    
  return (
    <div className="App1">
        <div className = "Form1">
            <div className = "RealForm1">
                <label for="signinField" id="signin2">harmony</label>
                <img src="/images/flower.png" alt="Flower" id="flowerImage" />
                <p for="welcoming" id = "welcomeMessage">Insure your business and enhance your harmony </p>
                <div className = "Buttons">
                    <input id="signinButton2" type="submit" value="Log In" onClick={handleLoginAsk}/>
                    <input id="signupButton3" type="submit" value="Sign Up" onClick={handleRegisterAsk}/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Welcome;