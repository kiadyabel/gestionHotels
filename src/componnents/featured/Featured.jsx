import React from "react";
import "./featured.css";
import photo5 from "../../utils/images/sary5.jpg";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotel/countByCity?cities=berlin,london,madrid"
  );
  return (
    <div className="featured">
      {loading ? (
        "loading please wait "
      ) : (
        <>
          <div className="featuredItems">
            <img src={photo5} alt="sary" />
            <div className="featuredTitle">
              <h1>Berlin</h1>
              <h3> {data[0]} properties</h3>
            </div>
          </div>
          <div className="featuredItems">
            <img src={photo5} alt="sary" />
            <div className="featuredTitle">
              <h1>London</h1>
              <h3>{data[1]} properties</h3>    
            </div>
          </div>
          <div className="featuredItems">
            <img src={photo5} alt="sary" />
            <div className="featuredTitle">
              <h1>Madrid</h1>
              <h3>{data[2]} properties</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
