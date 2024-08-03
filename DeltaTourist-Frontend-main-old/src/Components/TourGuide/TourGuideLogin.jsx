import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import CircleLoader
from "react-spinners/CircleLoader";
import imgSrc from '../../Assets/trip_advisor_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const TourGuideLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000);
    try {

      const response = await fetch('https://successful-puce-centipede.cyclic.cloud/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const authToken = data.token;
        localStorage.setItem('token', JSON.stringify(authToken));
        localStorage.setItem('email', email);
      localStorage.setItem('password', password);
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

   

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-image">
          <img src={imgSrc} alt="Login" />
        </div>
        <div className="login-form">
          <h2>
            Welcome Back!
            <br />
            <span style={{ color: '#BC2035', fontSize: '25px' }}>Log In as Tour Guide</span>
          </h2>

          <form onSubmit={handleLogin}>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="password-toggle"
                onClick={togglePasswordVisibility}
              />
            </div>
            <center>
              <button type="submit" className="login-button">
              {loading ?
    <CircleLoader
      color={"#fff"}
      loading={loading}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
      
    /> :
    <span style={{ marginRight: '8px' }}>Login</span>
  }
              </button>
            </center>
          </form>
          <p>
            Don't have an account? <Link to="/TourGuide">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};



export default TourGuideLogin;
