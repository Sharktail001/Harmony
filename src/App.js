import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Questions from './pages/Questions';

// import Welcome from './pages/Welcome'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element = {<Welcome />} />
          <Route path ="/HomePage" element = {<HomePage />} />
          <Route path ="/SignUp" element = {<SignUp />} />
          <Route path ="/login" element={<Login />} /> 
          <Route path ="/Questions" element={<Questions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
