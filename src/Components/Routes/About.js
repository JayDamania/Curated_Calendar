import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Aboutimg from "../Asset/night.jpg";
import Footer from "../Footer/Footer";
import Aboutus from "../About/Aboutus";

function About() {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero-mid"
        Heroimg={Aboutimg}
        title="About"
        url="#"
        btnClass="hide"
      />
      <Aboutus />
      <Footer />
    </Fragment>
  );
}

export default About;
