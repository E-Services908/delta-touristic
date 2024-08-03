import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';
import CircleLoader
from "react-spinners/CircleLoader";
const TourGuide = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  let [loading, setLoading] = useState(false);
  // const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const handleSignUp = async (event) => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      // setIsSignUpSuccessful(true);
      
    }, 1000);
    event.preventDefault();
    try {

      const response = await fetch(process.env.REACT_APP_BACKEND_SERVER_URL + '/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: fullName,
          last_name: lastName,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert('Successfully created an account!');
      } else {
        console.error('Login failed');
      }
    } catch (error) {

      console.error('Error during login:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-form">
          <h2>Create an Account as TourGuide</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='new-password'
            />
            <div className="form-row">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <center>
              <button type="submit"
                className="login-button"
              >
                {loading ?
    <CircleLoader
      color={"#fff"}
      loading={loading}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    /> :
    <span style={{ marginRight: '8px' }}> Sign In</span>
  }
                
                
               </button>
            </center>
          </form>
          <p>
            Already have an account? <Link to="/TourGuideLogin">Log in</Link>
          </p>
        </div>
      </div>
      {/* <div className="background-image" style={{ backgroundImage: `url(${imgSrc})` }}></div> */}
    </div>
  );
};

export default TourGuide;
