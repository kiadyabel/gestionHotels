import React from "react";
import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";
import photo3 from "../../utils/images/sary3.jpg";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotel?featured=true&limit=4");

  return (
    <div className="FeaturedProperties">
      {loading ? (
        "loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="FeaturedPropertiesItems" key= {item._id}>
              <img src={item.photo[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from {item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Exellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};     

export default FeaturedProperties;
