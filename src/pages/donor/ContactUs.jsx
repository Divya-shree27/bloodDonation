import React from 'react';
import {Navbar,Footer, ContactInfo} from '../../components'

const ContactUs = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar username="Divya Shree" contactUsColor={'primary'}/>

      {/* Main Content */}
      <ContactInfo />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
