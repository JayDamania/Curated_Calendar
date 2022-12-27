import React, { Fragment } from "react";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import singupimg from "../Asset/1.jpg";
import Footer from "../Footer/Footer";
import Signupform from "../Contactform/Signupform";

function Signup() {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero-mid"
        Heroimg={singupimg}
        title="The Whole World Awaits"
        url="#"
        btnClass="hide"
      />
      <Signupform />
      <Footer />
    </Fragment>
  );
}

export default Signup;
