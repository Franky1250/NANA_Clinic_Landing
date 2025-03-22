import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-gray-900">
                <span className="text-blue-900">NA</span>
                <span className="text-red-500">NA</span>
                {/* Stack "Healthcare" below "NANA" and align tightly */}
                <div className="block text-sm leading-none mt-1">
                  <span className="text-blue-900">Health</span>
                  <span className="text-red-500">care</span>
                </div>
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Your trusted partner in comprehensive ear healthcare. We're
              dedicated to improving your hearing and quality of life.
            </p>
            <div className="flex space-x-4">
              {/* // facebook */}
              <a
                href="https://www.facebook.com/share/16837syix1/?mibextid=qi2Omg"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaFacebook className="w-6 h-6 text-blue-500" />
              </a>
              {/* // instagram */}
              <a
                href="https://www.instagram.com/nanahearing?igsh=ejFwYWRiYnRndTNv"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaInstagram className="w-6 h-6 text-pink-500" />
              </a>
              {/* // twitter */}
              <a
                href="https://x.com/NANA_Hearing?t=W9CgGOrMnRi3MeiCkLDDYw&s=08"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaXTwitter className="w-6 h-6 text-black" />
              </a>

              {/* // Youtube */}
              <a
                href="https://www.youtube.com/@NanaSpeechHearingClinic"
                className="text-gray-600 hover:text-clinic-primary transition-colors"
              >
                <FaYoutube className="w-6 h-6 text-red-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Hearing Assessments
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Hearing Aid trial & Fitting 
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Ear Wax Removal
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Tinnitus Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Speech Therapy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-clinic-primary transition-colors"
                >
                  Occupational Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CiLocationOn className="h-5 w-5 text-clinic-primary mt-1" />
                <span className="text-gray-600">
                  1st floor, <br />
                  Kathagola Rd, <br />
                  Near UCO Bank ATM, <br />
                  Mangalabag, Cuttack, Odisha, <br />
                  753001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IoCallOutline className="h-5 w-5 text-clinic-primary" />
                <span className="text-gray-600">+91 720 545 4269</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdOutlineEmail className="h-5 w-5 text-clinic-primary" />
                <span className="text-gray-600">
                  nana.healthcareclinic@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} NANA Hearing Clinic. All rights
              reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-clinic-primary text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
