import React, { useEffect, useState } from "react";
import "./WhereToStay.scss";
import axios from "axios";
import { BsClipboard2Check } from "react-icons/bs";
import { Link } from "react-router-dom";
const WhereToStay = () => {
  const [hotels, setHotels] = useState([]);
  const [resturant, setRestaurants] = useState([]);
  // const [userLocation, setUserLocation] = useState(null);
  const apiKey = "AIzaSyAmtoaiu6QePK03DynmYbPI5eUYfxwX0uc";

  const fetchData = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // setUserLocation({ latitude, longitude });

            let hotelApiUrl =
              process.env.REACT_APP_BACK_END +
              `/api/onLoadGoogleAPISearch?lat=${latitude}&lng=${longitude}&type=hotel`;

            const restaurantApiUrl =
              process.env.REACT_APP_BACK_END +
              `/api/onLoadGoogleAPISearch?lat=${latitude}&lng=${longitude}&type=restaurant`;

            const hotelResponse = await axios.get(hotelApiUrl);
            const restaurantResponse = await axios.get(restaurantApiUrl);

            const hotelsWithPlaceId = hotelResponse.data.results.map(
              (hotel) => ({
                ...hotel,
              })
            );

            const restaurantsWithPlaceId = restaurantResponse.data.results.map(
              (restaurant) => ({
                ...restaurant,
              })
            );

            setHotels(hotelsWithPlaceId);
            setRestaurants(restaurantsWithPlaceId);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiKey]);

  return (
    <div className="where-to-stay">
      <h2>Where to Stay</h2>
      <p className="intro">
        Hotels, B&amp;Bs, holiday villages, campsites, apartments and hostels.
        Get a quote for your seaside holiday on the Adriatic Coast or at the
        beach resorts of Comacchio, just a stone’s throw from the Po Delta
        nature reserve and not far from the cities of Ferrara, Ravenna, and
        Venice, UNESCO World Heritage sites.
      </p>
      <p className="intro">
        There is a range of accommodation throughout the Po Delta area, from
        Gorino to Ravenna, the Lido di Pomposa to the Lido di Spina, and
        Comacchio to Volano. We have all kinds of accommodation to satisfy every
        need and to ensure that you have an unforgettable holiday in Italy!
      </p>
      <h2>List of accomodation:</h2>
      <p style={{ fontSize: "40px", fontWeight: "800" }}>Hotel</p>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            {/* <img src={hotel.image} alt={hotel.name} className="hotel-image" /> */}
            <h3>{hotel.name}</h3>
            <p>{hotel.vicinity}</p>
            <button className="btn">
              <Link to={`/Details/${hotel.place_id}`}>
                DETAILS <BsClipboard2Check className="icon" />
              </Link>
            </button>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "40px", fontWeight: "800" }}>Resturant:</p>
      <div className="hotel-list">
        {resturant.map((resturant) => (
          <div className="hotel-card" key={resturant.id}>
            {/* <img src={resturant.image} alt={resturant.name} className="hotel-image" /> */}
            <h3>{resturant.name}</h3>
            <p>{resturant.description}</p>
            <button className="btn flex">
              <Link to={`/Details/${resturant.place_id}`}>
                DETAILS <BsClipboard2Check className="icon" />
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhereToStay;
