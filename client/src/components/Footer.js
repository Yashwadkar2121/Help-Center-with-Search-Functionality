import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 mt-10 ">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h4 className="font-semibold text-2xl mb-4 text-center ">Abstract</h4>
          <ul>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline ">
                Branches
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h4 className="font-semibold text-2xl mb-4 text-center">Resources</h4>
          <ul>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Release Notes
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Status
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h4 className="font-semibold text-2xl mb-4 text-center">Community</h4>
          <ul>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Dribbble
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Podcast
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto mb-6 sm:mb-0">
          <h4 className="font-semibold text-2xl mb-4 text-center">Company</h4>
          <ul>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-2 text-center">
              <a to="#" className="hover:underline">
                Legal
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto">
          <h4 className="font-semibold text-2xl mb-4 text-center">
            Contact Us
          </h4>
          <p className="mb-2 text-center">
            <a href="mailto:info@abstract.com" className="hover:underline">
              info@abstract.com
            </a>
          </p>
          <p className="text-sm mb-2 text-center">&copy; Copyright 2022</p>
          <p className="text-sm text-center">
            Abstract Studio Design, Inc.
            <br />
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
