import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../../componnents/navbar/header/Header";
import Navbar from "../../componnents/navbar/Navbar";
import photo2 from "../../utils/images/sary7.jpg";
import photo3 from "../../utils/images/sary6.jpg";
import photo6 from "../../utils/images/sary3.jpg";

import Footer from "../../componnents/footer/Footer";
import MailList from "../../componnents/mailList/MailList";
import "./hotel.css";

const Hotel = () => {

  const pts = [photo2, photo2, photo2, photo2, photo3, photo6];

  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const handelOpen = (i) => {
    setSlideNumber(i);
    setOpenSlider(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber  ;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    
    setSlideNumber(newSlideNumber)
  }
  
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {openSlider && (
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpenSlider(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={ () => handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={pts[slideNumber]} alt="" 
              className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={ () => handleMove("r")}/>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 new York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $145 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {pts.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handelOpen(i)}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetail">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                minima itaque necessitatibus nam iste quia autem atque ipsam
                porro fugit harum, quo accusamus temporibus vitae saepe nihil
                enim soluta alias. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Maxime possimus dicta sapiente nihil tempora
                aut iure, placeat repudiandae provident ratione soluta ab totam!
                Praesentium, est repudiandae excepturi magnam aliquid assumenda!
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9 night</h1>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </span>
              <h2>
                $945 <b>(9 night)</b>
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
