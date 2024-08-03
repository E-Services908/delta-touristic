import React, { useState, useEffect } from "react";
import "./main.scss";
//import icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboard2Check } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdOutlineReadMore } from "react-icons/md";
import CircleLoader from "react-spinners/CircleLoader";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import Aos from "aos";
import "aos/dist/aos.css";
// import API from "./../../../utils/API";
import IconBar from "./IconBar/IconBar";
import "./SearchHome.scss";
import "./SearchBar.scss";
import { Link } from "react-router-dom";
// const apiKey = "AIzaSyAmtoaiu6QePK03DynmYbPI5eUYfxwX0uc";

const Main = () => {
  const [data, setData] = useState([]);
  // const [showError, setShowError] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  // states fo wishlist
  const [isFilled, setIsFilled] = useState(false);
  const handleIconClick = (clickedData) => {
    console.log("handleIconClick triggered", clickedData);
    localStorage.setItem("CardData", JSON.stringify(clickedData));
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [searchCategory, setSearchCategory] = useState("all");
  const [selectedText, setSelectedText] = useState("Find Your Destination");
  const [searchText, setSearchText] = useState("SearchAll");
  // const [location, setLocation] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedState, setSelectedState] = useState(null);

  const [cardsToShow, setCardsToShow] = useState(8); // Number of cards to display initially
  const [cardsIncrement, setCardsIncrement] = useState(4); //after increment
  const [hasMoreCards, setHasMoreCards] = useState(true);
  useEffect(() => {
    // Check if there are more cards in the API response
    setHasMoreCards(data.length > cardsToShow);
  }, [data, cardsToShow]);


  const handleLoadMore = () => {
    setCardsToShow((prevCards) => prevCards + cardsIncrement);
  };

  useEffect(() => {
    console.log(selectedCountry);
    console.log(selectedCountry?.isoCode);
    console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [selectedCountry]);
  const [near, setNear] = useState("");
  let [loading, setLoading] = useState(false);
  const handleSearch = (category) => {
    setSelectedText(category === "SearchAll" ? "Where To" : category);
    setSearchCategory(category);
  };
  const handleSearchBar = async () => {
    setLoading(true);
    // setShowError(false);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    try {
     
      let apiUrl;
    if (searchCategory === 'Hotels') {
      // Search for hotels
      apiUrl = process.env.REACT_APP_BACK_END + `/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=hotels&radius=${5000}`;
    } else if (searchCategory === 'SearchAll') {
      // Search for all famous places (including restaurants and hotels)
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=tourist+place&radius=5000`;
    }
    else if (searchCategory === 'Supermarkets') {
      // Search for supermarkets
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=supermarkets&radius=5000`;
    } else if (searchCategory === 'Restaurants') {
      // Search for restaurants
      apiUrl = process.env.REACT_APP_BACK_END + `/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=restaurants&radius=${5000}`;
    }else if (searchCategory === 'Museum') {
      // Search for restaurants
      apiUrl = process.env.REACT_APP_BACK_END + `/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=museum&radius=${5000}`;
    }else if (searchCategory === 'Parks') {
      // Search for shopping malls
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=parks&radius=5000`;
    }else if (searchCategory === 'Hospitals') {
      // Search for shopping malls
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=hospitals&radius=5000`;
    } else if (searchCategory === 'Malls') {
      // Search for malls
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=malls&radius=5000`;
    }else if (searchCategory === 'Cruise') {
      // Search for malls
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=cruise&radius=5000`;
    }else if (searchCategory === 'Beach') {
      // Search for malls
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=beach&radius=5000`;
    }else if (searchCategory === 'Falls') {
      // Search for malls
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=falls&radius=5000`;
    }else if (searchCategory === 'Safari') {
      // Search for malls
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=safari&radius=5000`;
    } else {
      // Default search for any other category
      apiUrl = `${process.env.REACT_APP_BACK_END}/api/googlePlaceSearch?country=${selectedCountry.name}&searchText=tourist+place&radius=5000`;
    }
    if (near) {
      // If near is available, include it in the API call
      apiUrl += `&near=${near}`;
    }
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results.length > 0) {
        // console.log(data.results);
        let arr = [];
        for (let i = 0; i < data.results.length; i++) {
          let newObj = {};
          newObj.id = i;
          newObj.imgSrc = data.results[i].icon;
          newObj.desTitle = data.results[i]?.name;
          newObj.location = data.results[i].formatted_address;
          // Note: Google Places API does not provide a specific category for places,
          // so you might need to adjust this based on your application's needs.
          newObj.grade = "Category not available";
          // Google Places API does not provide a price level, adjust as needed.
          newObj.fees = "Price not available";
          newObj.description = "Description not available";
          newObj.place_id = data.results[i].place_id;
          arr.push(newObj);
        }
        setData(arr);
      } else {
        setData([]);
      }
      // } else {
      //   setData([]);
      // }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onLoadSearch = async (latitude, longitude) => {
    // let apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=500&type=restaurant&key=${apiKey}`;

    let apiUrl =
      process.env.REACT_APP_BACK_END +
      `/api/onLoadGoogleAPISearch?lat=${latitude}&lng=${longitude}&type=restaurant`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.results.length > 0) {
        let arr = [];
        for (let i = 0; i < data.results.length; i++) {
          let newObj = {};
          newObj.id = i;
          newObj.imgSrc = ""; // Google Places API doesn't provide an image directly, you may need to adjust this
          newObj.desTitle = data.results[i]?.name;
          newObj.location = data.results[i].vicinity;
          // Note: Google Places API does not provide a specific category for places,
          // so you might need to adjust this based on your application's needs.
          newObj.grade = "Category not available";
          // Google Places API does not provide a price level, adjust as needed.
          newObj.fees = "Price not available";
          newObj.description = "Description not available";
          newObj.place_id = data.results[i].place_id;
          arr.push(newObj);
        }
        setData(arr);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchText(newValue);
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          onLoadSearch(position?.coords?.latitude, position?.coords?.longitude);
        },
        function (error) {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);
  return (
    <>
      <div className="search-home-container">
        <div className="search-home-content">
          <div className="top-text">
            <h3>{selectedText}</h3>
          </div>
          <div className="search-bar">
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px",flexWrap:'wrap',justifyContent:'center' }}>
            <input
              type="text"
              onChange={handleInputChange}
              value={searchText}
              placeholder="Places to go, things to do, hotels..."
              className="input input-alt"
              hidden
            />
            <Select
              type="text"
              options={Country.getAllCountries()}
              getOptionLabel={(options)=>{
                return options["name"];
              }}
              getOptionValue={(options)=>{
                return options["name"];
              }}
              value={selectedCountry}
              onChange={(item)=>{
                setSelectedCountry(item);
              }}
              placeholder="Select Contry"
              className="input input-alt"
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: 165, // Adjust the width as needed
                }),
              }}
            />
            <Select
              type="text"
              options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
              getOptionLabel={(options)=>{
                return options["name"];
              }}
              getOptionValue={(options)=>{
                return options["name"];
              }}
              value={selectedState}
              onChange={(item) => {
                setSelectedState(item);
              }}              
              placeholder="Select State"
              className="input input-alt"
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: 165, // Adjust the width as needed
                }),
              }}
            />
            <Select
              options={City.getCitiesOfState(
              selectedState?.countryCode,
              selectedState?.isoCode
              ).map(city => ({ value: city.name, label: city.name }))}
              value={{ value: near, label: near }}
              onChange={(selectedOption) => {
                setNear(selectedOption.value);
                handleSearch(selectedOption.value); // Call the search function with the selected city
              }}
              placeholder="Select City" // Placeholder as a string
              className="input input-alt"
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: 120, // Adjust the width as needed
                }),
              }}
              />
          </div>
            <button
              onClick={() => {
                if (!selectedCountry) {
                  // Show alert if button is clicked while disabled
                  alert(
                    "Please enter values in both input fields before searching."
                  );
                } else {
                  handleSearchBar();
                }
              }}
              disabled={!selectedCountry} // Disable if either input is empty
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {loading ? (
                <CircleLoader
                  color={"#fff"}
                  loading={loading}
                  size={40}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <span style={{ marginRight: "8px" ,cursor:!selectedCountry ?'no-drop':'pointer'}}>Search</span>
              )}
            </button>
          </div>
          <br />
          <IconBar setSearchCategory={handleSearch} />
        </div>
      </div>
      <section className="main container section">
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Your Search Result for :
            {data ? (
              <span style={{ color: "black", fontWeight: "600" }}>
                {searchCategory} in {near}
              </span>
            ) : null}
          </h3>
        </div>
        <div className="secContent grid">
          {data.slice(0,cardsToShow).map(
            (
              {
                id,
                desTitle,
                location,
                grade,
                fees,
                description,
                fsq_id,
                place_id,
              },
              index
            ) => {
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="singleDestination"
                >
                  {/* <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div> */}
                  <div className="cardInfo">
                    <h4 className="desTitle">{desTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>
                    <div className="fess flex">
                      <div className="grade">
                        <span>{grade}</span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <div className="wishList">
                      <button className="btn flex">
                        <Link to={`/Details/${place_id}`}>
                          DETAILS <BsClipboard2Check className="icon" />
                        </Link>
                      </button>
                      <div>
                      <button
        className={`wishlist-btn ${isFilled ? "filled" : ""}`}
        onClick={() => {
          // Call handleIconClick with appropriate data
          handleIconClick({
            id,
            desTitle,
            location,
            grade,
            fees,
            description,
            fsq_id,
          });

          // Update isFilled state if needed
          setIsFilled(!isFilled);
        }}
      >
                          <span className="wishlist-icon">
                            <AiFillHeart />
                          </span>
                          <span className="wishlist-text">Add to Wishlist</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>

    <center>
      <div className="load-more-btn">
  {
    hasMoreCards&&(

  <button onClick={handleLoadMore} className="load-more-button">
    <span className="LoadTxt">Load More</span>
    <span className="loadMore-icon">
      <MdOutlineReadMore size={20} />
    </span>
  </button>

  )} 
</div>
</center>

       

    </>
  );
};

export default Main;
