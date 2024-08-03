import React, { useEffect } from 'react'
import './home.scss'
import maldivesOcean from '../../Assets/maldivesOcean.mp4'
// import { GrLocation } from 'react-icons/gr'
// import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { BsListUl } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Main from '../Main/SearchData/main'
// import axios from 'axios'
const Home = () => {
  //react hooks to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  // const [searchText, setSearchText] = useState('');
  // const [maxPrice, setMaxPrice] = useState(1000); // Default max price
  // const [results, setResults] = useState([]);
  // const [error, setError] = useState(null);
  // Event handler to update the range value
  // const handleSearchTextChange = (e) => {
  //   setSearchText(e.target.value);
  // };

  // const handleMaxPriceChange = (e) => {
  //   setMaxPrice(e.target.value);
  // };

  // const handleSearch = async () => {
  //   try {
  //     const response = await axios.get(`https://api.foursquare.com/v3/places/search?query=${searchText}&min_price=1&max_price=${maxPrice}`);
  //     setResults(response.data); // Assuming the API response contains an array of results
  //   } catch (err) {
  //     setError(err);
  //   }
  // };
  return (
    <>
      <section className='home'>
        <div className="overlay"></div>
        <video src={maldivesOcean} muted autoPlay loop typeof='video/mp4'></video>
        <div className="homeContent container">
          <div className="textDiv" data-aos="fade-up">
            {/* <span data-aos="fade-up" className="smallText">
              Our packages
            </span> */}
            <h1 data-aos="fade-up" className="homeTitle">
              Search Your Holidays
            </h1>
            <small data-aos="fade-up">Unlock the World with Delta Tourist: Your Gateway to Hotels, Dining, and Local Adventures. Explore, Discover, and Travel with Us!</small>
          </div>
          
          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className='icon' />
              <AiOutlineInstagram className='icon' />
              <FaTripadvisor className='icon' />


            </div>

            <div className="leftIcons">
              <BsListUl className='icon' />
              <TbApps className='icon' />

            </div>
          </div>
        </div>

            
      </section>
      <Main />
    </>
  )
}

export default Home
