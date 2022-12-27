import React, { Fragment } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Servicesimg from "../Asset/9.jpg";
import Footer from "../Footer/Footer";
import Trip from "../Trip/Trip";

function Services() {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero-mid"
        Heroimg={Servicesimg}
        title="Services"
        url="#"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </Fragment>
  );
}

export default Services;
