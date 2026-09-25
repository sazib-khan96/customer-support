import React from "react";

const Footer = () => {
  return (
    <div className="p-8 bg-black text-white mt-8">
      <div className="grid grid-cols-4 gap-5 lg:max-w-9/12 mx-auto">
        <div>
          <h1 className="text-xl my-3">CS — Ticket System</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h1  className="text-xl my-3">Company</h1>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>

        <div>
          <h1  className="text-xl my-3">Information</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h1  className="text-xl my-3">Social Links</h1>
          <ul>
            <li>Facebook</li>
            <li>Linkdin</li>
            <li>Instragram</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
