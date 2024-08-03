import React from 'react';
import './About.scss'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLeaf, faShieldAlt, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faHeadset, faStar, faClipboardCheck, faHeart } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  return (
    <div className='about-us'>
      <div className='hero'>
        <img src='your-hero-image.jpg' alt='Travel Adventure' />
      </div>
      <div className='intro'>
        <h1>Welcome to DeltaTourist</h1>
        <p>We're passionate about creating unforgettable travel experiences.</p>
      </div>
      <div className='our-values'>
        <h2>Our Values</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} /> We prioritize customer satisfaction.
          </li>
          <li>
            <FontAwesomeIcon icon={faLeaf} /> We value sustainable and responsible travel.
          </li>
          <li>
            <FontAwesomeIcon icon={faShieldAlt} /> We are committed to safety and quality.
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} /> We believe in teamwork and collaboration.
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} /> We promote cultural diversity and inclusivity.
          </li>
          {/* Add more values with Font Awesome icons as needed */}
        </ul>
      </div>

     
      <div className='cta'>
        <h2>Why Choose Us?</h2>
        <p>Experience our top-notch services with:</p>
        <ul className='services'> 
          <li>
            <div class="card">
              <a class="card1" href="/">
                <FontAwesomeIcon icon={faHeadset}  className='iconsFont'/>
                <p>24-Hour Customer Support</p>
                <p class="small">Round-the-clock customer support, available 24 hours a day, dedicated to assisting you with your travel queries and concerns.</p>
                <div class="go-corner" href="#">
                  <div class="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

          </li>
          <li>
            <div class="card">
              <a class="card1" href="/">
              <FontAwesomeIcon icon={faStar} className='iconsFont' />
                <p>Decades of Experience</p>
                <p class="small">Decades of experience in the travel industry, ensuring top-notch recommendations</p>
                <div class="go-corner" href="#">
                  <div class="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

          </li>
          <li>
            <div class="card">
              <a class="card1" href="/">
              <FontAwesomeIcon icon={faClipboardCheck} className='iconsFont' />
                <p> Expert Travel Guidance</p>
                <p class="small">Expert travel guidance from passionate professionals dedicated to your dream vacation.</p>
                <div class="go-corner" href="#">
                  <div class="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>

          </li>
          <li>
            <div class="card">
              <a class="card1" href="/">
              <FontAwesomeIcon icon={faHeart}  className='iconsFont'/>
                <p> Customer Satisfaction</p>
                <p class="small">Customer satisfaction as our top priority, making every trip a delightful experience for you.</p>
                <div class="go-corner" href="#">
                  <div class="go-arrow">
                    →
                  </div>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
