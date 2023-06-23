"use client";
import React from "react";
import Contact from "../src/components/contact";
import HeroBanner from "../src/components/herobanner";

const ContactUs = () => {
  return (
    <>
      <HeroBanner
        title="Contact"
        description="Suggest a new travel destination that you want to see and we will feature it in our blog."
        img="/assets/images/contact-banner.jpg"
      />
      <Contact />
    </>
  );
};

export default ContactUs;
