import React from "react";
import "./propertyList.css";
import useFetch from "../../hooks/useFetch";
import photo1 from "../../utils/images/sary6.jpg";
import photo2 from "../../utils/images/sary5.jpg";
import photo3 from "../../utils/images/sary4.jpg";
import photo4 from "../../utils/images/sary3.jpg";
import photo5 from "../../utils/images/sary1.jpg";

const PropertyList = () => {

  const { data, loading, error } = useFetch("/hotel/countByType");
  const photos = [photo1, photo2, photo3, photo4, photo5];


  return (
    <div className="pList">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          {data &&
            photos.map((img, i) => (
              <div className="pListItems" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitle">
                  <h2>{data[i]?.type}</h2>
                  <h3>
                    {data[i]?.count} {data[i]?.type}
                  </h3>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
