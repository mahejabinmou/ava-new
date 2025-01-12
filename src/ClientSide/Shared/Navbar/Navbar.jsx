import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom"; // Adjust based on your routing library
import { navLinks } from "../../../constant/data";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState(null); // Control dropdown
  const [hoverTimeout, setHoverTimeout] = useState(null); // Hover timeout for desktop
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle dropdown hover for desktop
  const handleDropdownEnter = (name) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setOpenDropdown(name);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // Delay to hide dropdown
    setHoverTimeout(timeout);
  };

  // Toggle dropdown for mobile
  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(name); // Open the clicked dropdown
    }
  };

  return (
    <div
      className={`${
        isHomePage ? "absolute z-50 bg-transparent" : " bg-[#F5F5F5]"
      } w-full md:py-0 md:h-[130px] flex items-center`}
    >
      <nav className="w-full">
        <div className="relative px-[30px] md:px-[32px] lg:px-[80px] xl:px-[100px] 2xl:px-[150px] flex justify-between items-center py-3">
          {/* Logo Section */}
          <Link
            className={`logo w-[50px] h-[78px] flex items-center cursor-pointer ${
              isOpen ? "z-50" : ""
            }`}
            to={"/"}
          >
            <img
              src="/images/ABA-Consulting-Logo.webp"
              alt="Logo"
              className=""
            />
          </Link>

          {/* Desktop Links Section */}
          <div className="hidden xl:flex  space-x-[50px] menuText">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="relative group menuText"
              >
                <div
                  className="flex items-center gap-[10px] menuText"
                  onMouseEnter={() =>
                    link.subLinks && handleDropdownEnter(link.name)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  <a className="text-gray-700 hover:text-blue-600">
                    {link.name}
                  </a>

                  {/* Dropdown Icon and Menu */}
                  {link.subLinks && (
                    <div className="relative">
                      <FaChevronDown className="ml-1 text-sm hover:text-blue-600 transition-transform hover:rotate-180 cursor-pointer" />
                      {openDropdown === link.name && (
                        <ul className="absolute top-10 left-[-100px] bg-white shadow-lg rounded-md py-2 w-48 z-10">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <Link
                                to={subLink.href}
                                className="block px-4 py-2 menuText text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </NavLink>
            ))}
          </div>

          {/* Button Section */}
          {/* <div className="hidden lg:flex justify-center bg-blue-500 min-w-[270px] hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 shadow rounded-md p-2">
						<Link to="/consultation">
							<button className="menuText text-white flex items-center justify-center">
								Book a Free Consultation
								<img
									src="/images/home/hero/material-symbols_arrow-insert (1).svg"
									alt=""
								/>
							</button>
						</Link>
					</div> */}

          <div
            className="hidden lg:flex justify-center items-center bg-blue-500 min-w-[274px] h-[48px]
          hover:bg-blue-600 transition duration-300 ease-in-out hover:scale-105 shadow rounded-md p-2"
          >
            <Link to="/consultation">
              <button className="  bodyText font-semibold   text-white   flex items-center justify-center   ">
                Book a Free Consultation
                <img
                  src="/images/home/hero/material-symbols_arrow-insert (1).svg"
                  alt=""
                />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute z-40 menuText top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-[30px] md:px-[32px] pt-2 pb-5 flex flex-col gap-[10px] py-4 mt-28">
            {navLinks.map((link) => (
              <div key={link.name} className="w-full">
                {/* Parent Link */}
                <Link
                  to={link.href}
                  className="flex-grow text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>

                {/* Dropdown Icon for Mobile */}
                {link.subLinks && (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="text-gray-600 hover:text-blue-600 focus:outline-none"
                  >
                    <FaChevronDown
                      className={`transition-transform pl-1 ${
                        openDropdown === link.name ? "ml-2 rotate-180" : "ml-2"
                      }`}
                    />
                  </button>
                )}

                {/* Dropdown Links */}
                {openDropdown === link.name && link.subLinks && (
                  <ul className="pl-4 flex flex-col space-y-2 py-3">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <Link
                          to={subLink.href}
                          className="block text-gray-700 hover:text-blue-600 pl-2"
                          onClick={() => setIsOpen(false)} // Close menu on sublink click
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
