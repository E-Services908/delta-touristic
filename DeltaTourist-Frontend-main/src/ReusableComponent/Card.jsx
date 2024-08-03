import React from "react";
import "./Card.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Card = ({ data }) => {
  const {
    id,
    desTitle,
    location,
    grade,
    fees,
    description,
    fsq_id,
    place_id,
    imgSrc
  } = data;

  return (
    <section className="main">
      <div className="secContent">
        <div key={id} className="singleDestination">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
