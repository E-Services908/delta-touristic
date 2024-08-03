// Detail.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.scss";
import img1 from "../../Assets/hotelA.jpg";
import img2 from "../../Assets/hotelA.jpg";
import img3 from "../../Assets/hotelA.jpg";
import img4 from "../../Assets/hotelA.jpg";
import img5 from "../../Assets/hotelA.jpg";
import img6 from "../../Assets/hotelA.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faStar,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-carousel-minimal";
const apiKey = "AIzaSyAmtoaiu6QePK03DynmYbPI5eUYfxwX0uc";

const Detail = () => {
  // const [newComment, setNewComment] = useState("");
  const { place_id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
  getLocationDetails(place_id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [place_id]);


  const [details, setDetails] = useState({
    companyName: "Islamabad Serena Hotel",
    reviewStatus: "4.5 stars",
    address: "123 Main Street, City, Country",
    website: "www.sample-restaurant.com",
    phoneNumber: "+1 (123) 456-7890",
    images: [
      { img: img1 },
      { img: img2 },
      { img: img3 },
      { img: img4 },
      { img: img5 },
      { img: img6 },
    ],

    location: {
      latitude: 40.7128, // Replace with the actual latitude
      longitude: -74.006, // Replace with the actual longitude
    },
  });

  const getLocationDetails = async (place_id) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_END +
          `/api/googlePlaceDetails?placeId=${place_id}`
      );
      const data = await response.json();

      if (data.result) {
        setDetails({
          ...details,
          companyName: data.result.name,
          reviewStatus: data.result.rating,
          address: data.result.formatted_address,
          website: data.result.website,
          phoneNumber: data.result.formatted_phone_number,
          images: [], // Adjust as needed
          comments: [], // Adjust as needed
          location: {
            latitude: data.result.geometry.location.lat,
            longitude: data.result.geometry.location.lng,
          },
        });

        if (data.result?.photos) {
          data.result?.photos.forEach((photo) => {
            let url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo?.photo_reference}&key=${apiKey}`;
            setData((prevImages) => [...prevImages, { image: url }]);
          });
        }
      } else {
        console.log("Error fetching location details");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  const carouselContainerStyle = {
    maxWidth: "100%",
    width: "100%",
    margin: "0px auto ", // Added margin to space out elements
    padding: "0 20px", // Added padding to space out elements
    height: "500px",
  };

  ////------ending caurasel
  // const handleCommentSubmit = (e) => {
  //   e.preventDefault();
  //   if (newComment.trim() !== "") {
  //     const newCommentObj = {
  //       id: details?.comments.length + 1,
  //       user: "User Name", // Replace with the actual user's name
  //       text: newComment,
  //     };
  //     details?.comments.unshift(newCommentObj);
  //     setNewComment("");
  //   }
  // };

  // const MapComponent = withScriptjs(
  //   withGoogleMap(() => (
  //     <GoogleMap
  //       defaultZoom={15}
  //       defaultCenter={{ latitude: details?.location.latitude, longitude: details?.location.longitude }}
  //     >
  //       <Marker
  //         position={{ latitude: details?.location.latitude, longitude: details?.location.longitude }}
  //       />
  //     </GoogleMap>
  //   ))
  // );

  return (
    <center>
      <div className="restaurant-detail">
        <div className="restaurant-info">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{details?.companyName || "N/A"}</td>
              </tr>
              <tr>
                <th>Review Status</th>
                <td>
                  <FontAwesomeIcon icon={faStar} />{" "}
                  {details?.reviewStatus || "N/A"}
                </td>
              </tr>
              <tr>
                <th>Address</th>
                <td>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                  {details?.address || "N/A"}
                </td>
              </tr>
              <tr>
                <th>Website</th>
                <td>
                  <FontAwesomeIcon icon={faGlobe} /> {details?.website || "N/A"}
                </td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  {details?.phoneNumber || "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <main>
          <center>
            {/* {////----caurasel images  */}
            {data.length > 0 && (
              <div style={carouselContainerStyle}>
                <Carousel
                  data={data}
                  time={2000}
                  width="100%"
                  height="500px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  captionPosition="bottom"
                  automatic={true}
                  dots={true}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={true}
                  thumbnailWidth="100px"
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    marginTop: "20px",
                  }}
                />
              </div>
            )}
          </center>
        </main>
        {/* <section className="restaurant-location">
          <h2 style={{ marginTop: '200px' }}>Location</h2>
          <p>{details?.address}</p>
          <MapComponent
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ width: '100%', height: '300px' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </section> */}
      </div>
    </center>
  );
};

export default Detail;
