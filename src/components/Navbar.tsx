"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button1 from "./Button1";
import './styles/menubutton.scss'

const service = [
  {
    title: "Book a Seat",
    link: "/book-a-seat",
  },
  {
    title: "Check Seat Availability",
    link: "/Check-Seat-Availability",
  },
  {
    title: "Get Specific Booking Details",
    link: "/booking-details",
  }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [services, setServices] = useState(false);

  return (
    <>
      <nav
        className="fixed w-full z-50 top-0 left-0 shadow px-[3vw] justify-between bg-white"
      >
        <header className="">
          <div className="">
            <div className="flex items-center justify-between py-4">
              <Link to="/" className="flex">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 16 16"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    fill="#444"
                    d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"
                  ></path>
                </svg>
                <p className="text-2xl">
                  TrackTickets
                </p>
              </Link>
              <span className="hidden md:flex gap-8">
                <ul className="hidden lg:flex items-center gap-8">
                  <li className="relative">
                    <Link
                      to="/resources"
                      className="hover:text-teal-700 transition duration-200 py-5"
                      onMouseEnter={() => setServices(true)}
                      onMouseLeave={() => setServices(false)}
                    >
                      Services
                    </Link>
                    {services && (
                      <div
                        onMouseEnter={() => setServices(true)}
                        onMouseLeave={() => setServices(false)}
                        className="absolute left-0 mt-2  bg-white border border-gray-200 shadow-lg z-50 "
                      >
                        {service.map(({ title, link }, index) => (
                          <li key={index}>
                            <Link
                              onClick={() => setServices(false)}
                              to={link}
                              className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
                            >
                              {title}
                            </Link>
                          </li>
                        ))}
                      </div>
                    )}
                  </li>
                  <li className="hover:text-primary transition duration-200">
                    <Link to="/contact" className="flex items-center gap-1">
                    <svg width={15} height={15} viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg"><path  d="M864 409.6a192 192 0 01-37.888 349.44A256.064 256.064 0 01576 960h-96a32 32 0 110-64h96a192.064 192.064 0 00181.12-128H736a32 32 0 01-32-32V416a32 32 0 0132-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 00-573.056 0A193.235 193.235 0 01256 384h32a32 32 0 0132 32v320a32 32 0 01-32 32h-32a192 192 0 01-96-358.4 352 352 0 01704 0zM256 448a128 128 0 100 256V448zm640 128a128 128 0 00-128-128v256a128 128 0 00128-128z"/></svg>
                    Help</Link>
                  </li>
                </ul>
                <Button1 title="Log in/ Sign Up" link="/login" />
              </span>
              {/* for hamberger menu */}
              <div className="lg:hidden">
                <label className="hamburger" >
                  <input checked={menuOpen} type="checkbox" onClick={() => setMenuOpen(!menuOpen)} />
                  <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                  </svg>
                </label>

              </div>
            </div>
          </div>
        </header>

        {menuOpen && (
          <motion.div
          initial={{x:-100 }}
          animate={{ x:0 }}
          transition={{ duration: .5 }}
          className="fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div onClick={() => setMenuOpen(pre => !pre)} className="fixed inset-0 bg-gray-800 opacity-80"></div>
            <nav className="relative z-10 px-9 py-8 h-full overflow-y-auto bg-white flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <Link className="" to="/" onClick={() => setMenuOpen(pre => !pre)}>
                  <svg
                    width={30}
                    height={30}
                    viewBox="0 0 16 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill="#444"
                      d="M13 11.2v-7.4c0-1-0.8-1.8-1.8-1.8h-2.2v-1h2v-1h-6v1h2v1h-2.2c-1 0-1.8 0.8-1.8 1.8v7.4c0 1 0.8 1.8 1.8 1.8h0.2l-0.7 1h-1.3v1h0.7l-0.7 1h2l0.6-1h4.9l0.6 1h2l-0.7-1h0.6v-1h-1.3l-0.7-1h0.2c1 0 1.8-0.8 1.8-1.8zM4 3.9c0-0.5 0.4-0.9 0.9-0.9h6.1c0.6 0 1 0.4 1 0.9v2.1c0 0.6-0.4 1-0.9 1h-6.2c-0.5 0-0.9-0.4-0.9-0.9v-2.2zM4 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1zM9.9 14h-3.8l0.6-1h2.6l0.6 1zM10 11c0-0.6 0.4-1 1-1s1 0.4 1 1c0 0.6-0.4 1-1 1s-1-0.4-1-1z"
                    ></path>
                  </svg>

                </Link>
                <button onClick={() => setMenuOpen(false)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col gap-12 py-12">
                {service.map(({ title, link }, index) => (
                  <motion.li
                  key={index} onClick={() => setMenuOpen(pre => !pre)}>
                    <Link
                      to={link}
                      className="hover:text-opacity-70 transition duration-200"
                    >
                      {title}
                    </Link>
                  </motion.li>
                ))}

                <li onClick={() => setMenuOpen(pre => !pre)}>
                  <Link
                    to={'/help'}
                    className="hover:text-opacity-70 transition duration-200"
                  >
                    Help
                  </Link>
                </li>
              </ul>
              <Link
              onClick={()=>setMenuOpen(pre=>!pre)}
                to="login"
                className="block text-center py-3 px-5 rounded-full bg-primary text-white shadow text-sm font-semibold transition duration-200"
              >
                Log in/Sign Up
              </Link>
            </nav>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
