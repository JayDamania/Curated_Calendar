import React, { Fragment } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import contactimg from "../Asset/2.jpg";
import Footer from "../Footer/Footer";
import Contactform from "../Contactform/Contactform";

function Contactus() {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero-mid"
        Heroimg={contactimg}
        title="Contact Us"
        url="/"
        btnClass="hide"
      />
      <Contactform />
      <Footer />
    </Fragment>
  );
}

export default Contactus;
