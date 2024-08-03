import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {

  const emailAddress = 'inquiriesesa@gmail.com';
  // const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  return (
    <div className='contact-container'>
      <div className='container'>
        <div className='contactPART'>
          <div className="content">
            <h1>Contact Us</h1>
            <p>Over Company Delta Touristic provide u details about eveything near you </p>
          </div>
          <div className='row'>
            <div className='col-1'>
              <div className='socialIcon'>
                <div className='icon'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className='icon'>
                  <h1>Address</h1>
                  <p>MaryLand, USA</p>
                </div>
              </div>
              <div className='socialIcon'>
                <div className='icon'>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className='icon'>
                  <h1>Phone</h1>
                  <p>+13016060756</p>
                </div>
              </div>
              <a className='socialIcon' href={`mailto:${emailAddress}`}>
                <div className='icon'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className='icon'>
                  <h1 >Email</h1>
                  <p>inquiriesesa@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="col-2">

              {/* <form className='form'>
                <div className='form-group'>
                  <h1 style={{ color: '#fff' }}>Send Message</h1>
                  <input type='text' id='email' name='email' required placeholder='Full Name' />
                  <span style={{ marginTop: '10px' }}> <input type='text' id='email' name='email' required placeholder='Eamil' /></span>
                </div>
                <div className='form-group'>

                  <textarea
                    name='textarea'
                    id='textarea'
                    rows='10'
                    cols='50'
                    required
                    placeholder='Write Your Message'
                  ></textarea>
                </div>
                <button className='form-submit-btn' type='submit'>
                  Submit
                </button>
              </form> */}

<iframe
  title="Google Maps Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1591913.738461017!2d-77.2369665!3d38.804821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64debe9f190df%3A0xf2af37657655f6b1!2sMaryland%2C%20USA!5e0!3m2!1sen!2s!4v1708345663829!5m2!1sen!2s"
  width="600"
  height="450"
  style={{ border: "0" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>

            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Contact;
