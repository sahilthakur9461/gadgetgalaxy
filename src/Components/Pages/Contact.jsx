
import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import bgImage from '../img/game.jpg';

function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  

  return (
    <div className="font-sans bg-cover bg-center bg-no-repeat bg-fixed backdrop-filter" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="container mx-auto text-black opacity-80 py-20 px-4 lg:px-0">
        <div className="text-center mb-12">
          {/* <h1 className="text-4xl font-bold">Contact Us</h1> */}
          {/* <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magra aliqua. Ut enim ad minim veniam.
          </p> */}
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
            <div className="mb-10 flex items-start">
              <FaMapMarkerAlt className="text-3xl text-teal-400 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-teal-400">Address</h2>
                <p>1002 West 5th Ave,</p>
                <p>Alaska, New York,</p>
                <p>55060.</p>
              </div>
            </div>
            <div className="mb-10 flex items-start">
              <FaPhoneAlt className="text-3xl text-teal-400 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-teal-400">Phone</h2>
                <p>12523-4566-8954-8956.</p>
              </div>
            </div>
            <div className="mb-10 flex items-start">
              <FaEnvelope className="text-3xl text-teal-400 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-teal-400">Email</h2>
                <p>contactemail@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-10 rounded-lg shadow-4xl">
            {/* <form>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Send Message</h2>
              <div className="mb-6">
                <label className="block text-gray-800 mb-2">Full Name</label>
                <input type="text" className="w-full border-b border-gray-400 py-2 focus:outline-none" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-800 mb-2">Email</label>
                <input type="email" className="w-full border-b border-gray-400 py-2 focus:outline-none" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-800 mb-2">Type your message...</label>
                <textarea className="w-full border-b border-gray-400 py-2 focus:outline-none" />
              </div>
              <button type="button" className="w-full py-3 bg-teal-400 text-white font-semibold rounded-lg">Send</button>
            </form> */}
            <div className="visme_d" data-title="Untitled Project" data-url="4d6w9y6k-untitled-project" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="77107"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

