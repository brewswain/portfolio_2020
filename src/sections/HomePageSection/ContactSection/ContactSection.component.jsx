import React from "react";

import "./ContactSection.style.scss";

const ContactSection = () => (
  <section className="section__contact" id="contact">
    <h1 className="section__header">Get in Contact</h1>
    <div className="contact__info">
      <div className="contact__subtitle">
        If you want to get in contact for anything, hit me up here:
      </div>
      <a href="mailto:blee.code@gmail.com" className="contact__email">
        blee.code@gmail.com
      </a>
    </div>
  </section>
);

export default ContactSection;
