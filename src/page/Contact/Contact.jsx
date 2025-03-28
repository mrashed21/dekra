import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "./ContactForm/ContactFrom";
import ContactHero from "./ContactHero/ContactHero";
import Maps from "./Maps/Maps";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <ContactHero />
      <ContactForm />
      <Maps />
    </div>
  );
};

export default Contact;
