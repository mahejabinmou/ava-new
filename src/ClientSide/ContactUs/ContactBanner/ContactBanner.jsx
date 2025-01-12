// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { CiPhone } from "react-icons/ci";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const ContactBanner = () => {
  // State for modal (if required)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    destination: "",
    coaching: "",
    agree: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Process form data here
    setIsModalOpen(false); // Close modal if needed
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="">
      {/* Banner Section */}
      <div className="relative">
        <div
          style={{
            backgroundImage: `url("/images/contactUsBanner.png")`,
            filter: "brightness(.4)",
          }}
          className="bg-no-repeat bg-center bg-cover w-full h-[420px] flex justify-center items-center"
        ></div>

        <div
          className="absolute inset-0 flex flex-col justify-center max-w-[750px] px-[30px]
            md:px-[32px] lg:px-[80px] xl:px-[100px] 2xl:px-[150px]"
        >
          <h1 className="headTwo text-white pb-[12px]">Contact us</h1>

          <p className="bodyText text-white md:max-w-[550px]">
            If you have any questions, feedback, or need assistance, don’t
            hesitate to reach out. Our team is dedicated to providing you with
            the support you need. Fill out the form below or contact us
            directly, and we’ll get back to you as soon as possible
          </p>
        </div>
      </div>

      <div className="relative top-[-50px]  ">
        <div className="mx-[30px] md:mx-[32px] lg:mx-[80px] bg-white pt-[50px]  rounded-[12px] xl:mx-[100px] 2xl:mx-[150px] pb-[50px] px-[50px]">
          <div className="grid grid-cols-1 gap-y-[50px]">
            <div className="grid grid-cols-1 xl:grid-cols-3  gap-[16px]">
              <div className=" grid grid-cols-[50px_1fr] group border border-[#397CCA]  rounded-[8px] hover:text-white hover:bg-[#397CCA]  w-full  items-center  4)] md:gap-x-[20px] gap-x-[15px]  md:p-[30px] p-[15px] bg-white">
                {/* Contact Card */}
                <div className="bg-[#397CCA] group-hover:bg-white p-[12px] rounded-[4px] flex justify-center items-center">
                  <CiPhone
                    className="text-white group-hover:text-[#397CCA]"
                    size={32}
                  />
                </div>
                <div>
                  <h1 className="pb-[12px] group-hover:text-white text-[#0B0B0B] menuText font-outfit font-medium">
                    Phone Number
                  </h1>
                  <p className="pb-[5px] group-hover:text-white/[.8] text-[#0B0B0BCC]/[.8] bodyText font-normal">
                    612-226-6210
                  </p>
                  {/* <p className="pb-[5px]  text-[#0B0B0BCC]/[.8] bodyText font-normal">
										612-226-6210
									</p> */}
                </div>
              </div>

              <div className="border border-[#397CCA] group-hover:text-white rounded-[8px]  grid grid-cols-[50px_1fr] group   hover:bg-[#397CCA]  w-full items-center  4)] md:gap-x-[20px] gap-x-[15px]  md:p-[30px] p-[15px] bg-white">
                <div className="bg-[#397CCA] group-hover:bg-white p-[12px] rounded-[4px] flex justify-center items-center">
                  <IoLocationOutline
                    className="text-white group-hover:text-[#397CCA]"
                    size={32}
                  />
                </div>
                <div>
                  <h1 className="pb-[12px] group-hover:text-white text-[#0B0B0B] menuText font-outfit font-medium">
                    Address
                  </h1>
                  <p className="pb-[5px] group-hover:text-white/[.8] text-[#0B0B0BCC]/[.8] bodyText font-normal overflow-wrap-break">
                    9900 13th Ave N, Unit 210G Minneapolis, MN 55441 United
                    States
                  </p>
                  {/* <p className="pb-[5px]  text-[#0B0B0BCC]/[.8] bodyText font-normal break-all overflow-wrap-break">
										MN 55441 United States
									</p> */}
                </div>
              </div>

              <div className="border border-[#397CCA] group-hover:text-white rounded-[8px] grid grid-cols-[50px_1fr] group   hover:bg-[#397CCA]  w-full items-center  4)] md:gap-x-[20px] gap-x-[15px]  md:p-[30px] p-[15px] bg-white">
                <div className="bg-[#397CCA] group-hover:bg-white p-[12px] rounded-[4px] flex justify-center items-center">
                  <MdOutlineEmail
                    className="text-white group-hover:text-[#397CCA]"
                    size={32}
                  />
                </div>
                <div>
                  <h1 className="pb-[12px] group-hover:text-white text-[#0B0B0B] menuText font-outfit font-medium">
                    Email
                  </h1>
                  <p className="pb-[5px] group-hover:text-white/[.8] text-[#0B0B0BCC]/[.8] bodyText font-normal break-all overflow-wrap-break">
                    info@abaconsulting.org
                  </p>
                  {/* <p className="pb-[5px]  text-[#0B0B0BCC]/[.8] bodyText font-normal break-all overflow-wrap-break">
										info@abaconsulting.org
									</p> */}
                </div>
              </div>

              {/* Contact Form */}
            </div>

            <div className="grid grid-cols-1 ">
              <div>
                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="mb-[24px]">
                    <label
                      htmlFor="name"
                      className="block mb-[10px] menuText  leading-[24px]   text-[#0B0B0B] font-outfit font-medium"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-[20px]  outline-none py-[13px] border border-[#CBD5E1] rounded-lg text-[#0B0B0BCC]/[.8] bodyText font-normal font-inter"
                      placeholder="Enter full name"
                      required
                    />
                  </div>

                  <div className="mb-[24px]">
                    <label
                      htmlFor="name"
                      className="block mb-[10px] menuText  leading-[24px] text-[#0B0B0B]/[.8] font-outfit font-medium"
                    >
                      E-mail *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-[20px]  outline-none py-[13px] border border-[#CBD5E1]rounded-lg text-[#0B0B0BCC]/[.8] bodyText font-normal font-inter"
                      placeholder="Enter e-mail address"
                      required
                    />
                  </div>

                  {/* Destination Dropdown */}
                  <div className="mb-[24px]">
                    <label
                      htmlFor="destination"
                      className="block mb-[10px] menuText leading-[24px]text-[#0B0B0B] font-outfit font-medium"
                    >
                      Subject *
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full pl-[20px]  outline-none py-[13px] border border-[#CBD5E1] rounded-lg text-[#0B0B0BCC]/[.6] bodyText font-normal font-inter"
                      required
                    >
                      <option value="">
                        Select what you want to ask about!
                      </option>
                      <option value="Destination 1">Destination 1</option>
                      <option value="Destination 2">Destination 2</option>
                      <option value="Destination 3">Destination 3</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="mb-[24px]">
                    <label
                      htmlFor="message"
                      className="block mb-[10px] menuText leading-[24px] text-[#0B0B0B] font-outfit font-medium"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full pl-[20px]  outline-none py-[13px] border border-[#CBD5E1] rounded-lg text-[#0B0B0BCC]/[.6] bodyText font-normal font-inter"
                      placeholder="Enter your message"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-white text-[#397CCA] flex justify-center rounded-[8px] border-[1px] border-[#397CCA] hover:bg-[#397CCA] hover:text-white   items-center   py-2 px-4 font-helvetica text-[18px] leading-[23px] font-semibold transition duration-300 ease-in-out hover:scale-105"
                  >
                    Submit <FiArrowUpRight className="ml-2" size={32} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[80px]  md:mt-[80px]  lg:mt-[80px] xl:mt-[100px] 2xl:mt-[100px]">
        <div className="h-auto">
          <img
            src="/images/mapNew.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
