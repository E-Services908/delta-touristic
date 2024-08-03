import React, { useEffect } from "react";
import "./footer.scss";
import maldivesOcean from "../../Assets/videothai.mp4";
import { MdTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // React hooks to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          src={maldivesOcean}
          loop
          autoPlay
          muted
          typeof="video/mp4"
        ></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Stay Connected with Delta Tourist</small>
            <h2>Embark on Your Journey with Us</h2>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <Link to="/" className="logo flex">
                <MdTravelExplore />
                DeltaTourist
              </Link>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              <b>"Welcome to Delta Tourist </b>- Your Ultimate Travel Companion.
              Discover incredible hotels, dine at the finest restaurants, and
              explore local gems. We provide detailed information, addresses,
              and contact details for hassle-free planning. Your adventure
              begins here. Join us in making memories that last a lifetime.
              Whether you're a globetrotter or a weekend explorer, our platform
              has something for everyone. Let us be your trusted travel partner,
              helping you navigate the world's wonders. Start your journey with
              Delta Tourist today!"
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
            <div className="footerDiv flex">
              <small>
                © {new Date().getFullYear()} DeltaTourist All rights reserved.
              </small>
            </div>
          </div>
        </div>
        {/* Group Main */}
      </div>
    </section>
  );
};

export default Footer;
