// pages/contact.js
import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="container mx-auto my-20">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-gray-600">
        <a href="#" className="text-gray-600 hover:underline">
          Home
        </a>
        <span>/</span>
        <span>Contact</span>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Call Us Section */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-orange-500 p-3 rounded-full">
              <FaPhone className="text-white text-lg"/>
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Call To Us</h2>
          <p className="text-gray-600 mt-2">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-gray-800 mt-2 font-medium">Phone: +880611112222</p>
        </div>

        {/* Write to Us Section */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-orange-500 p-3 rounded-full">
              <MdOutlineMail className="text-white text-lg"/>
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Write To Us</h2>
          <p className="text-gray-600 mt-2">
            Contact this email and we will get back to you within 24 hours.
          </p>
          <p className="text-gray-800 mt-2 font-medium">
            Emails: customer@exclusive.com
          </p>
          <p className="text-gray-800 mt-1 font-medium">
            Emails: support@exclusive.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
