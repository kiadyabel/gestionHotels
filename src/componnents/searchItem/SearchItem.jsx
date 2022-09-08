import React from "react";
import "./searchItem.css";
import photo1 from "../../utils/images/sary8.jpg";
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img src={item.photo[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h2 className="siTitle">{item.name}</h2>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free Aireport taxi</span>
        <span className="siSubtitle">
          Studio Apaertement with Air conditioning
        </span>
        <span className="siFeatures">
          {item.description}
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          you can cancel later , so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className="siDetailsText">
            <span className="siPrice">{item.cheapestPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">See availability</button>
            </Link>
            
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
