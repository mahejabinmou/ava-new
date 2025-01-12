// const Footer = () => {
//   return (
//     <div className="sectionGap">
//       <div>
//         <div
//           className="bg-[#1B2633] pt-[60px] px-[30px]
//    md:pt-[60px] md:px-[32px]
//    lg:px-[60px] lg:pt-[80px]
//    xl:px-[100px] xl:pt-[80px]
//    2xl:px-[150px] 2xl:pt-[80px]"
//         >
//           <div className="grid grid-cols-4 ">
//             {/* image */}
//             {/* <div className="grid grid-cols-1  max-w-[380px]">
//               <div className="w-[51px] h-16 ">
//                 <img className="" src="/images/ABA-Consulting-Logo.webp" />
//               </div>
//               <div className="pt-[14px] text-white/[.8] bodyText  font-normal font-['Inter'] leading-normal">
//                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//                 commodo ligula eget dolor. There are many variations of passages
//                 of Lorem.Duis aute irure dolor in reprehenderit in v
//               </div>
//             </div> */}

//             {/* quick link */}
//             <div className=" grid grid-cols-1   ">
//               <h1 className=" text-[#ff8c00] menuText font-semibold font-['Outfit']">
//                 Quick Links
//               </h1>
//               <div className=" grid grid-cols-1  ">
//                 <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
//                   Home
//                 </p>
//                 <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
//                   About us
//                 </p>
//                 <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
//                   Service
//                 </p>
//                 <p className=" text-white/[.8] bodyText font-normal font-['Inter'] leading-normal">
//                   Contact us
//                 </p>
//               </div>
//             </div>

//             {/* Service */}

//             {/* <div className="grid grid-cols-1 justify-start items-start gap-5 ">
//               <div className=" text-[#ff8c00] text-lg font-semibold font-['Outfit']">
//                 Services
//               </div>
//               <div className="grid grid-cols-1 justify-start items-start gap-4 ">
//                 <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
//                   Compliance Assistance
//                 </div>
//                 <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
//                   Staffing Solutions
//                 </div>
//                 <div className=" text-white/[.8] text-base font-normal font-['Inter'] leading-normal">
//                   Compliance Assistance
//                 </div>
//               </div>
//             </div> */}

//             {/* contactinfo */}

//             <div className="flex-col justify-start items-start gap-5 ">
//               <div className=" text-[#FF8C00] menuText font-semibold font-['Outfit']">
//                 Contact Info
//               </div>
//               <div>
//                 <p className="bodyText font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
//                   612-226-6210
//                 </p>
//                 <p className="bodyText  font-normal font-['Inter']  text-[#FFFFFFCC]/[.8]">
//                   abaconsulting.org
//                 </p>
//                 <p className="bodyText  font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
//                   info@abaconsulting.org
//                 </p>
//                 <p className="bodyText  font-normal font-['Inter'] text-[#FFFFFFCC]/[.8]">
//                   9900 13th Ave N, Unit 210G Minneapolis, MN 55441 United States
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import { CiGlobe, CiLocationOn } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";

const FooterContact = () => {
  return (
    <div>
      <footer
        className="bg-[#1a2633] body-font  
    px-[30px] md:px-[32px] lg:px-[80px]  xl:px-[100px]  2xl:px-[150px]"
      >
        <div className="hidden lg:block">
          <div className="w-full px-5 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 lg:mx-0 mx-auto text-center lg:text-left">
              <div className="flex h-[56px] w-[50px] title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-2">
                <img
                  src="/images/ABA-Consulting-Logo.webp"
                  className=""
                  alt=""
                />
              </div>
              <p className="mt-2 text-[#FFFFFFCC]/[.8] font-normal font-inter">
                We are committed to delivering high-quality services and
                exceptional experiences.
              </p>
            </div>
            <div className="flex-grow flex flex-wrap lg:pl-20 -mb-10 lg:mt-0 mt-10 lg:text-left text-center ">
              <div className="lg:w-1/3 md:w-1/2 w-full px-4 ">
                <h2 className="title-font font-semibold text-[#FF8C00] menuText tracking-widest text-sm mb-3 font-inter">
                  Quick Links
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-3">
                    <Link
                      to="/"
                      className="text-[#FFFFFFCC]/[.8] font-normal font-inter"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/aboutUs"
                      className="text-[#FFFFFFCC]/[.8] font-normal font-inter"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/service"
                      className="text-[#FFFFFFCC]/[.8] font-normal font-inter"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/contact"
                      className="text-[#FFFFFFCC]/[.8] font-normal font-inter"
                    >
                      Contact us
                    </Link>
                  </li>
                </nav>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-semibold text-[#FF8C00] menuText font-inter tracking-widest text-sm mb-3">
                  Services
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-3">
                    <Link
                      to="/service#assistance"
                      className="text-[#FFFFFFCC]/[.8] font-normal font-inter"
                    >
                      Compliance Assistance
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/service#solutions"
                      className="text-[#FFFFFFCC]/[.8] font-normal font-inter"
                    >
                      Staffing Solutions
                    </Link>
                  </li>
                  <li className="mb-3">
                    <Link
                      to="/service#package"
                      className="text-[#FFFFFFCC]/[.8] font-normal font-inter"
                    >
                      Comprehensive Package
                    </Link>
                  </li>
                </nav>
              </div>

              <div className="lg:w-1/3 md:w-1/2 w-full px-4 text-[#FFFFFFCC]">
                <h2 className="title-font font-semibold text-[#FF8C00] font-inter tracking-widest menuText mb-4">
                  Contact Info
                </h2>
                <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-4 text-[#FFFFFFCC]/[.8] md:text-base">
                  {/* Phone */}
                  <div className="text-[#FF8C00] flex items-center">
                    <ImPhone />
                  </div>
                  <div className="flex items-center font-inter  text-[#FFFFFFCC]/[.8]">
                    612-226-6210
                  </div>

                  {/* Website */}
                  <div className="text-[#FF8C00] flex items-center">
                    <CiGlobe />
                  </div>
                  <div className="flex items-center  font-inter text-[#FFFFFFCC]/[.8]">
                    abaconsulting.org
                  </div>

                  {/* Email */}
                  <div className="text-[#FF8C00] flex items-center">
                    <HiOutlineMail />
                  </div>
                  <div className="flex items-center  font-normal font-inter  text-[#FFFFFFCC]/[.8]">
                    info@abaconsulting.org
                  </div>

                  {/* Address */}
                  <div className="text-[#FF8C00] flex items-start pt-1">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col font-inter  font-normal text-[#FFFFFFCC]/[.8]">
                    <span>9900 13th Ave N, Unit 210G</span>
                    <span>Minneapolis, MN 55441 United States</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden block">
          <div className="container px-5 pt-24 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
            {/* Left Section (Logo + Quick Links) */}
            <div>
              {/* Logo Section */}
              <div className="w-64 flex-shrink-0  text-left ">
                <div className="flex h-[56px] w-[50px]  title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-[30px] lg:pb-2">
                  <img
                    src="/images/ABA-Consulting-Logo.webp"
                    className=""
                    alt=""
                  />
                </div>
                <p className="mt-2 text-[#FFFFFFCC]/[.8] font-normal">
                  We are committed to delivering high-quality services and
                  exceptional experiences.
                </p>
              </div>

              {/* Quick Links */}
              <div className="mt-10 md:mt-14">
                <h2 className="title-font font-medium text-[#FF8C00] menuText tracking-widest text-sm mb-3">
                  Quick Links
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-2">
                    <Link to="/" className="text-[#FFFFFFCC]/[.8] font-normal">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/aboutUs"
                      className="text-[#FFFFFFCC]/[.8] font-normal"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/service"
                      className="text-[#FFFFFFCC]/[.8] font-normal"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/contact"
                      className="text-[#FFFFFFCC]/[.8] font-normal"
                    >
                      Contact us
                    </Link>
                  </li>
                </nav>
              </div>
            </div>

            {/* Right Section (Services + Contact Info) */}
            <div className="flex flex-col gap-y-10">
              {/* Services */}
              <div>
                <h2 className="title-font font-medium text-[#FF8C00] menuText tracking-widest text-sm mb-3">
                  Services
                </h2>
                <nav className="list-none mb-10">
                  <li className="mb-2">
                    <Link
                      to="/service#assistance"
                      className="text-[#FFFFFFCC]/[.8] font-normal"
                    >
                      Compliance Assistance
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/service#solutions"
                      className="text-[#FFFFFFCC]/[.8] font-normal"
                    >
                      Staffing Solutions
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/service#package"
                      className="text-[#FFFFFFCC]/[.8] font-normal"
                    >
                      Comprehensive Package
                    </Link>
                  </li>
                </nav>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="title-font font-medium menuText text-[#FF8C00] tracking-widest  mb-4">
                  Contact Info
                </h2>
                <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-4 text-sm md:text-base">
                  {/* Phone */}
                  <div className="text-[#FF8C00] flex items-center">
                    <ImPhone />
                  </div>
                  <div className="flex items-center text-[#FFFFFFCC]/[.8]">
                    612-226-6210
                  </div>

                  {/* Website */}
                  <div className="text-[#FF8C00] flex items-center">
                    <CiGlobe />
                  </div>
                  <div className="flex items-center text-[#FFFFFFCC]/[.8]">
                    abaconsulting.org
                  </div>

                  {/* Email */}
                  <div className="text-[#FF8C00] flex items-center">
                    <HiOutlineMail />
                  </div>
                  <div className="flex items-center text-[#FFFFFFCC]/[.8]">
                    info@abaconsulting.org
                  </div>

                  {/* Address */}
                  <div className="text-[#FF8C00] flex items-start pt-1">
                    <CiLocationOn />
                  </div>
                  <div className="flex flex-col text-[#FFFFFFCC]/[.8]">
                    <span>9900 13th Ave N, Unit 210G</span>
                    <span>Minneapolis, MN 55441 United States</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 flex-col justify-start items-center gap-10 flex mt-[40px] lg:mt-[0px]">
          <div className="self-stretch absolute inset-x-0  h-[0px] border border-white/40"></div>
          <div className="self-stretch text-center text-white/80 ">
            <p className="bodyText font-inter pt-4">
              Copyright ABA consulting, designed and developed by
              <a href="https://fowzimedia.com">
                <span className="font-bold font-outfit"> Fowzi Media</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterContact;
