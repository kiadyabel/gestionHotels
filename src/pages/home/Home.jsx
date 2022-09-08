import React from "react";
import FeaturedProperties from "../../componnents/featureadProperties/FeaturedProperties";
import Featured from "../../componnents/featured/Featured";
import Footer from "../../componnents/footer/Footer";
import MailList from "../../componnents/mailList/MailList";
import Header from "../../componnents/navbar/header/Header";
import Navbar from "../../componnents/navbar/Navbar";
import PropertyList from "../../componnents/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h3 className="homeTitle">browser by property type</h3>
        <PropertyList/>
        <h3 className="homeTitle">Hotels guest Love</h3>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
